import {postsAPI} from './../api/api'
const GET_POSTS = 'GET-POSTS'

let initialState = {
    items: [
      {
        "title":"dcdcd",
        "text": "пcdc"
        }
    ]
}

const postsListReducer = ( state=initialState, action ) => {
    switch(action.type) {
      case GET_POSTS: {
        return { ...state, items: action.posts }
      }
      default: 
            return state
    }
}

export const getPosts = (posts) => ({type: GET_POSTS, posts})

export const getPostsThunk = () => (dispatch) => {
  postsAPI.getPosts().then(response=> {
    dispatch(getPosts(response))
  })
}

export default postsListReducer
