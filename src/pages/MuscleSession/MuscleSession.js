import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAuth } from "firebase/auth";

import {InputNumber} from '../../components/InputNumber';
import {Button} from '../../components/Button';

import ExerciseDataService from '../../services/exercises';
import DaysDataService from '../../services/days';

import { 
    LEG_EXERCISES,
    CHEST_EXERCISES,
    ARMS_EXERCISES,
    BACK_EXERCISES,
    SENSATION,
    IMAGE_SENSATIONS,
} from './constants';

import {
    Container, 
    ExercisesDropdown, 
    NumberSets, 
    InputsContainer,
    Label,
    Separator,
    ButtonsContainer,
    SensationsContainer,
    SensationImageBox,
} from './MuscleSession.styles';

export const MuscleSession = () => {
    const {type, date} = useParams();
    const [exercises, setExercises] = useState();
    const [exercise, setExercise] = useState('default');
    const [set, addSet] = useState(1);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [sensation, setSensation] = useState(null);
    const [view, setView] = useState('sets');
    const [sets, setSets] = useState([]);
    const [payload, setPayload] = useState({});
    const navigate = useNavigate();

    const auth = getAuth();
    const user = auth.currentUser;

    
    useEffect(() => {
        switch(type){
            case 'leg': 
                setExercises(LEG_EXERCISES);
                break;
            case 'arm': 
                setExercises(CHEST_EXERCISES);
                break;
            case 'chest': 
                setExercises(ARMS_EXERCISES);
                break;
            case 'back':
                setExercises(BACK_EXERCISES); 
                break;
            default: 
                console.log('error');
                break;
        }
    }, []);

    const handleOnClickAddSet = () => {
        addSet(set +1);
        setSets([...sets, {reps, weight}]);
    }
       
    const handleOnClickFinishSets = () => {
        console.log('🚀 TLC ~ file: MuscleSession.js ~ line 73 ~ handleOnClickFinishSets ~ sets', sets);


        setSets([...sets, {reps, weight}]);
        setView('sensationForm');
    }

    const handleOnFinishExercise = () => {
        const payloadExercise = {
            userId: user.uid,
            date,
            name: exercise,
            exercise: [...sets],
            feeling: sensation,
        };

        const initialWeight = 0;
        const totalWeight = sets.reduce(
        (previousValue, currentValue) => previousValue + (parseInt(currentValue.reps) * parseInt(currentValue.weight)),
        initialWeight
        );

        console.log('total: ', totalWeight);

        ExerciseDataService.addExercise(payloadExercise).then(exerciseId => {
            DaysDataService.getDay().then(data =>{
                data.forEach((doc) => {
                      if(doc.data()){
                          const newExercisesList = [...doc.data().exercises, {
                              name: exercise,
                              total: totalWeight,
                              id: exerciseId,
                          }];
                          console.log('🚀 TLC ~ file: MuscleSession.js ~ line 113 ~ newExercisesList ~ newExercisesList', newExercisesList)
                      } else{
                        const payloadDay = {
                            userId: user.uid,
                            date,
                            exercises: [{
                                name: exercise,
                                total: totalWeight,
                                id: exerciseId,
                            }]
                        };
            
                        DaysDataService.addDay(payloadDay).then(data => console.log('data: ', data).catch(err => console.log('error', err))); 
                      }
                });
                  
              });
             // 1. fetch del día actual para saber si existe 
             // 2. Si existe el dia coger el array de ejercicio 
             // 3. Si no existe crear uno nuevo con el ejercicio 
            
        }).catch(err => console.log('error: ', err)); 
        

        // DaysDataService.addDay(payloadDay).then(data => console.log('data: ', data).catch(err => console.log('error', err)));
        // ExerciseDataService.getExercise();
        console.log('🚀 TLC ~ file: MuscleSession.js ~ line 110 ~ handleOnFinishExercise ~ exercise', exercise)
        
    }
       

    const renderOptions = () =>{
        if(exercises){
            const options = exercises.map((exercise) => {
                return <option value={exercise}>{exercise}</option>
            });

            return options;
        }
    }

    const renderSetTrackingForm = () => {
        return <>
            {exercise !== 'default' && <>
                <NumberSets>{`Serie nº ${set}`}</NumberSets>
            </>}
            {exercise !== 'default' && <InputsContainer>
                        <Label>Repeticiones: </Label>
                        <Separator>
                        <InputNumber 
                            fontSize={'6rem'}
                            width={'125px'}
                            height={'85px'}
                            onChange={(e) => setReps(e.target.value)}
                            value={reps}
                        /> 
                        </Separator>
                        <Label>Peso (en kg): </Label>
                        <Separator>
                        <InputNumber 
                            fontSize={'5rem'}
                            width={'165px'}
                            height={'75px'}
                            onChange={(e) => setWeight(e.target.value)}
                            value={weight}
                        />
                        </Separator>
            </InputsContainer>}
            {exercise !== 'default' && <ButtonsContainer>
                <Button onClick={() => handleOnClickAddSet()} text="Nueva serie" />
                <Button onClick={() => handleOnClickFinishSets()} text=" " />
            </ButtonsContainer>}
        </>
    }

    const renderSensationForm = () => {
        return <>
        <SensationsContainer>
            <SensationImageBox border={sensation === SENSATION.BAD}>
                <img src={IMAGE_SENSATIONS.BAD} onClick={() => setSensation(SENSATION.BAD)} alt="Bad" width="110" height="110" />
            </SensationImageBox>
            
            <SensationImageBox border={sensation === SENSATION.NORMAL}>
                <img src={IMAGE_SENSATIONS.NORMAL} onClick={() => setSensation(SENSATION.NORMAL)} alt="Normal" width="110" height="110" />
            </SensationImageBox>

            <SensationImageBox border={sensation === SENSATION.GOOD}>
                <img src={IMAGE_SENSATIONS.GOOD} onClick={() => setSensation(SENSATION.GOOD)} alt="Good" width="110" height="110" />
            </SensationImageBox>
        </SensationsContainer>
        <Button onClick={() => handleOnFinishExercise()}text="Finalizar ejercicio" />
        <Button onClick={() => setView('sets')}text="Atrás" />
        </>
    }

    return <Container>
       <ExercisesDropdown onChange={(e) => setExercise(e.target.value)} name="exercises">
            <option value="default">Elige un ejercicio</option>
            {renderOptions()}
       </ExercisesDropdown>
      
       {view === 'sets' ? renderSetTrackingForm() : renderSensationForm()}
    </Container>;
};

export default MuscleSession;

/* 
DaysDataService.getDay().then(data =>{
                data.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                      if(doc.data()){
                          const newExercisesList = [...doc.data().exercises, {
                              name: exercise,
                              total: totalWeight,
                              id: exerciseId,
                          }];
                      }
                });
                  
              });
*/

/* 
console.log('data: ', data);
            const payloadDay = {
                userId: user.uid,
                date,
                exercises: [{
                    name: exercise,
                    total: totalWeight,
                    id: exerciseId,
                }]
            };

            DaysDataService.addDay(payloadDay).then(data => console.log('data: ', data).catch(err => console.log('error', err))); 
*/