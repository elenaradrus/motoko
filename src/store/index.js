import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";

import CounterReducer from './Counter';
import TasksReducer from './Tasks';
import TrainingDay from './TrainingDay';
import UserReducer from './User';

const middlewares = [logger];

const rootReducer = combineReducers({
    counter: CounterReducer,
    tasks: TasksReducer,
    trainingDay: TrainingDay,
    user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;