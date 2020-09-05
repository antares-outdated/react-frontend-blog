import {postsAPI} from '../api/api'
import {updateObjectInArray} from './../utils/object-helpers'

const GET_POSTS = 'GET_POSTS'
const GET_POST_FULL = 'GET_POST_FULL'
const DEL_POST_FULL = 'DEL_POST_FULL'
const ADD_POST = 'ADD_POST'
const EDIT_POST= 'EDIT_POST'
const LOADING= 'LOADING'

let initialState = {
    posts: [],
    postFull: [],
    loading: false
}

const reducer = ( state=initialState, action ) => {
    switch(action.type) {
      case GET_POSTS: {
        return { ...state, posts: action.posts }
      }
      case GET_POST_FULL: {
        return { ...state, postFull: action.postFull }
      }
      case LOADING: {
        return { ...state.loading, loading: action.load }
      }
      case DEL_POST_FULL: {
        return {
          ...state.posts,
          posts: [...state.posts.filter(id => id._id !== action.postId)]
        }
      }
      case EDIT_POST: {
        let editPost = {
          _id: action.postId,
          title: action.title,
          description: action.text,
          img: action.imageUrl
        }
        return {
          ...state.posts,
          posts: updateObjectInArray(state.posts, action.postId, '_id', editPost)
        }
      }
      case ADD_POST: {
        let newPost = {
          title: action.title,
          text: action.text,
          img: action.img
        }
        return { 
          ...state, 
          posts: [...state.posts, newPost] }
      }
      default: 
        return state
    }
}
// Action Creators

export const getPosts = (posts) => ({type: GET_POSTS, posts})
export const getPostFull = (postFull) => ({type: GET_POST_FULL, postFull})

export const delPostFull = (postId) => ({type: DEL_POST_FULL, postId})

export const editPost = (title, text, imageUrl, postId) => {
  return {
    type: EDIT_POST,
    postId: postId,
    title: title,
    text: text,
    imageUrl: imageUrl
  }
}

export const addPost = (title, text, img) => {
  return {
    type: ADD_POST,
    title: title,
    text: text,
    imageUrl: img
  }
}

export const loadingActionCreator = (load) => ({type: LOADING, load})

// Thunk

export const getPostsThunk = () => (dispatch) => {
  // dispatch(loadingActionCreator(true))
  postsAPI.getPosts().then(response=> {
    dispatch(getPosts(response))
  })
}

export const getPostFullThunk = (postId) => (dispatch) => {
    postsAPI.getPosts(postId).then(response => {
        dispatch(getPostFull(response))
    })
}

export const delPostFullThunk = (postId) => (dispatch) => {
  if (global.confirm('Вы действительно хотите удалить статью?')) {
    postsAPI.delPost(postId).then(resopnse => { 
      dispatch(delPostFull(postId))
    })
  }
}

export const addPostThunk = (title, text, img) => (dispatch) => {
  postsAPI.addPost(title, text, img).then(response => {
    dispatch(addPost(title, text, img))
  })
}

export const editPostThunk = (title, text, imageUrl, postId) => (dispatch) => {
  if (global.confirm('Вы действительно хотите изменить статью?')) {
    postsAPI.editPost(title, text, imageUrl, postId).then(response => {
      dispatch(editPost(title, text, imageUrl, postId))
    })
  }
}

export default reducer




