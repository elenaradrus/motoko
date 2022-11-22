import { useNavigate } from 'react-router-dom';
// import {InputNumber} from '../../components/InputNumber';
// import {Button} from '../../components/Button';
// import {Container, InputDate, Separator, Sentence} from './Home.styles';

// import { useSelector } from 'react-redux';

export const Home = () => {

    const navigate = useNavigate();

    //const date = useSelector((state) => state.trainingDay.date);

    const handleOnClick = () => {
        navigate('/spendings');
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p onClick={() => handleOnClick()}>Ir a gastos</p>
        </div>
    );
};

export default Home;



