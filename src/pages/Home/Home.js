import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import MonthIncome from '../../components/MonthIncome/MonthIncome';
import AddIncome from '../../components/AddIncome/AddIncome';

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
        <Layout>
            <MonthIncome />
            <AddIncome/>
        </Layout>
        
    );
};

export default Home;



