import { createStore, applyMiddleware, compose, combineReducers }  from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import questions from './modules/questions';

const rootReducer = combineReducers({
  questions
});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares)
  )
);

export default store;
