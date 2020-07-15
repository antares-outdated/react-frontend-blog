import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import postsListReducer from './postslist-reducer'

let reducers = combineReducers({
    postsList: postsListReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
