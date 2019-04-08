import { createStore, applyMiddleware, compose, combineReducers }  from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// module level reducers
import questions from './modules/questions';

// combining all module level reducers
const rootReducer = combineReducers({
  questions
});

// array to contain middlewared to be composed by redux
const middlewares = [thunk];

// checks whether to appy redux logger middleware only during development
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

// create redux store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares)
  )
);

export default store;
