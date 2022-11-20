import ActionTypes from './types';

const initialState = {
    count: 0
};

const CounterReducer = (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.ADD_ONE: {
             return {
                 ...state,
                 count: state.count + 1,
             }
        }
        default: 
            return state;
    }
};

export default CounterReducer;