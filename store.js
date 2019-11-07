import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({...reducers})

const store = (initialStore = {}) => {
  return createStore(
    reducer,
    initialStore,
    composeWithDevTools(applyMiddleware(thunkMiddleware,logger))
  )
}

export default store;