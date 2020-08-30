import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// let reducers = combineReducers({
//     reducer: reducer,
// })

// let store = createStore(reducers, applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store
