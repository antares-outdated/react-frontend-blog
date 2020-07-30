import {postsAPI} from '../api/api'
const GET_POSTS = 'GET_POSTS'
const GET_POST_FULL = 'GET_POST_FULL'
const DEL_POST_FULL = 'DEL_POST_FULL'
const ADD_POST = 'ADD_POST'
const EDIT_POST= 'EDIT_POST'


let initialState = {
    posts: [],
    postFull: []
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
        return { ...state, postFull: [] }
      }
      case EDIT_POST: {
        let editPost = {
          title: action.title,
          description: action.text,
          img: action.imageUrl
        }
        return {
          ...state,
          posts: [...state.posts, editPost]
        }
      }
      case ADD_POST: {
        let newPost = {
          title: action.title,
          description: action.text,
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

export const delPostFull = () => ({type: DEL_POST_FULL})

export const editPost = (title, text, imageUrl) => {
  return {
    type: EDIT_POST,
    title: title,
    text: text,
    imageUrl: imageUrl
  }
}

export const addPost = (title, text, imageUrl) => {
  return {
    type: ADD_POST, 
    title: title,
    text: text,
    imageUrl: imageUrl
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
    postsAPI.delPost(postId)
  }
}

export const addPostThunk = (title, text, imageUrl) => (dispatch) => {
  postsAPI.addPost(title, text, imageUrl).then(response => {
    dispatch(addPost(response.data))
    global.confirm('Пост был создан.')
  })
}

export const editPostThunk = (title, text, imageUrl, postId) => (dispatch) => {
  if (global.confirm('Вы действительно хотите изменить статью?')) {
    postsAPI.editPost(title, text, imageUrl, postId).then(response => {
      dispatch(editPost(response.data))
    })
  }
}

export default reducer




