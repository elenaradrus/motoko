import { useNavigate } from 'react-router-dom';

import {EXERCISE_TYPES} from './constants';

import {Container, ExerciseCard} from './ExercicsTypes.styes';

import { useSelector } from 'react-redux';

export const ExerciseTypes = () => {
    const navigate = useNavigate();
    const date = useSelector((state) => state.trainingDay.date);

    const handleOnClick = (exerciseType) => {
        navigate(`/training-day/${date}/types/${exerciseType.toLowerCase()}`);
    }

    const renderTypes = () => {
        const list =  EXERCISE_TYPES.map((exercise, index) => {
            return <ExerciseCard 
                        key={index} 
                        onClick={() => handleOnClick(exercise)}>
                        {exercise}
                   </ExerciseCard>
        });

        return list;
    }

    return <Container>
        TIPOS DE EJERCICIOS 
        <br/>
        {renderTypes()}
    </Container>;
};

export default ExerciseTypes;