import {postsAPI} from '../api/api'
const GET_POSTS = 'GET_POSTS'
const GET_POST_FULL = 'GET_POST_FULL'
const DEL_POST_FULL = 'DEL_POST_FULL'
const ADD_POST = 'ADD_POST'
const EDIT_POST= 'EDIT_POST'

let initialState = {
    posts: [],
    postFull: [],
}

const reducer = ( state=initialState, action ) => {
    switch(action.type) {
      case GET_POSTS: {
        return { ...state, posts: action.posts }
      }
      case GET_POST_FULL: {
        return { ...state, postFull: action.postFull }
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
          posts: [...state.posts.map(post => post._id === action.postId), editPost ]
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

export const getPosts = (posts) => ({type: GET_POSTS, posts})
export const getPostFull = (postFull) => ({type: GET_POST_FULL, postFull})

export const delPostFull = (postId) => ({type: DEL_POST_FULL, postId})

export const editPost = (title, text, imageUrl, postId) => {
  return {
    type: EDIT_POST,
    _id: postId,
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

export const getPostsThunk = () => (dispatch) => {
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
      dispatch(editPost(title, text, imageUrl))
    })
  }
}

export default reducer




