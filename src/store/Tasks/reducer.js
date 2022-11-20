import ActionTypes from './types';

const initialState = {
    tasks: [],
};

const TasksReducer =  (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.ADD_TASK: {
             return {
                 ...state,
                 task: [
                     ...state.tasks,
                     action.payload,
                 ],
             }
        }
        default: 
            return state;
    }
};

export default TasksReducer;