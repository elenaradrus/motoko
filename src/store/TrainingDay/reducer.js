import ActionTypes from './types';

const getCurrentDateSplittedByDash = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${day}-${month}-${year}`;
}

const initialState = {
    date: getCurrentDateSplittedByDash(),
};

const TasksReducer =  (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.SAVE_TRAINING_DATE: {
             return {
                 ...state,
                 date: action.payload,
             }
        }
        default: 
            return state;
    }
};

export default TasksReducer;