import ActionsTypes from './types';

const saveTrainingDate = (payload) => ({
    type: ActionsTypes.SAVE_TRAINING_DATE,
    payload,
});

export default saveTrainingDate;