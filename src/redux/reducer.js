import { postsAPI } from '../api/api'
import { updateObjectInArray } from './../utils/object-helpers'

const GET_POSTS = 'GET_POSTS'
const GET_POST_FULL = 'GET_POST_FULL'
const DEL_POST_FULL = 'DEL_POST_FULL'
const EDIT_POST = 'EDIT_POST'
const ADD_POST = 'ADD_POST'
const LOADING = 'LOADING'

let initialState = {
  posts: [],
  postFull: [],
  loader: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        text: action.text,
        color: action.color
      }
      return {
        ...state.posts,
        posts: updateObjectInArray(state.posts, action.postId, '_id', editPost)
      }
    }
    case ADD_POST: {
      let newPost = {
        _id: '',
        title: action.title,
        text: action.text,
        color: action.color
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    }
    case LOADING: {
      return { ...state, loader: action.toggleLoader }
    }
    default:
      return state
  }
}
// Action Creators
const getPosts = (posts) => ({ type: GET_POSTS, posts })
const getPostFull = (postFull) => ({ type: GET_POST_FULL, postFull })
const delPostFull = (postId) => ({ type: DEL_POST_FULL, postId })
const editPost = (title, text, color, postId) => {
  return {
    type: EDIT_POST,
    postId: postId,
    title: title,
    text: text,
    color: color
  }
}
const addPost = (title, color, text) => {
  return {
    type: ADD_POST,
    title: title,
    text: text,
    color: color
  }
}
const toggleValueOfLoader = (toggleLoader) => ({ type: LOADING, toggleLoader })

// Thunk
export const getPostsThunk = () => async (dispatch) => {
  dispatch(toggleValueOfLoader(true))
  
  let response = await postsAPI.getPosts()

  if(response.status === 200) {
    dispatch(getPosts(response.data))
    dispatch(toggleValueOfLoader(false))
  }
}

export const getPostFullThunk = (postId) => async (dispatch) => {
  dispatch(toggleValueOfLoader(true))

  let response = await postsAPI.getPosts(postId)

  if(response.status === 200) {
    dispatch(getPostFull(response.data))
    dispatch(toggleValueOfLoader(false))
  }
}

export const delPostFullThunk = (postId) => async (dispatch) => {
  if (global.confirm('Вы действительно хотите удалить статью?')) {
    dispatch(toggleValueOfLoader(true))

    let response = await postsAPI.delPost(postId)
    if(response.status === 200) {
      dispatch(delPostFull(postId))
      dispatch(toggleValueOfLoader(false))
    }
  }
}

export const addPostThunk = (title, color, text) => async (dispatch) => {
  dispatch(toggleValueOfLoader(true))

  let response = await postsAPI.addPost(title, text, color)
  if(response.status === 200) {
    dispatch(addPost(title, color, text))
    dispatch(toggleValueOfLoader(false))
  }
}

export const editPostThunk = (title, text, imageUrl, postId) => (dispatch) => {
  dispatch(toggleValueOfLoader(true))

  let response = postsAPI.editPost(title, text, imageUrl, postId)

  if(response.status === 200) {
    dispatch(editPost(title, text, imageUrl, postId))
    dispatch(toggleValueOfLoader(false))
  }
}

export default reducer


