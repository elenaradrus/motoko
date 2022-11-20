import { useNavigate } from 'react-router-dom';

import {InputNumber} from '../../components/InputNumber';
import {Button} from '../../components/Button';
import {Container, InputDate, Separator, Sentence} from './Home.styles';

import { useSelector } from 'react-redux';

export const Home = () => {
    const navigate = useNavigate();

    const date = useSelector((state) => state.trainingDay.date);

    const handleOnClick = () => {
        navigate(`training-day/type`);
    }


    const renderInputDate = () => {
        const date = new Date();

        return (
            <InputDate>
                <InputNumber value={date.getDate()}/> 
                <Separator>/</Separator>
                <InputNumber value={date.getMonth() + 1}/>  
                <Separator>/</Separator>
                <InputNumber value={date.getFullYear().toString().slice(-2)}/> 
            </InputDate>
        );
    }



    return <Container>
       {renderInputDate()}
       <Sentence>"Hazlo ahora porque a veces mañana se convierte en nunca"</Sentence>
       <Button onClick={() => handleOnClick()} text="Empezar entrenamiento"/>
    </Container>;
};

export default Home;