import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

export const initializeStore = () => {
  return createStore(
    ...reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}