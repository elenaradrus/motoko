import { combineReducers, createStore } from 'redux';

import CounterReducer from './Counter';
import TasksReducer from './Tasks';
import TrainingDay from './TrainingDay';

const rootReducer = combineReducers({
    counter: CounterReducer,
    tasks: TasksReducer,
    trainingDay: TrainingDay,
});

const store = createStore(rootReducer);

export default store;