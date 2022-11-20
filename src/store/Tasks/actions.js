import ActionsTypes from './types';

const addTask = (payload) => ({
    type: ActionsTypes.ADD_ONE,
    payload,
});

export default addTask;