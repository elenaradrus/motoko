import ActionsTypes from './types';

const getUserSuccess = (payload) => ({
    type: ActionsTypes.GET_USER_SUCCESS,
    payload,
});

const getUserError = (payload) => ({
    type: ActionsTypes.GET_USER_ERROR,
    payload
})

export {
    getUserSuccess,
    getUserError
};