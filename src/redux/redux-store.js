import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  reducer: reducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store
