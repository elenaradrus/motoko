import ActionTypes from './types';

const initialState = {
    name: null,
};

const UserReducer = (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.GET_USER_SUCCESS: {
            console.log('pasando por aquí', action.payload);
             return {
                ...state,
                ...action.payload,
            }
        }
        case ActionTypes.GET_USER_ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: 
            return state;
    }
};

export default UserReducer;