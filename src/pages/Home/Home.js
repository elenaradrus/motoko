import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import MonthIncome from '../../components/MonthIncome/MonthIncome';
import AddIncome from '../../components/AddIncome/AddIncome';
import { useState } from 'react';

// import {InputNumber} from '../../components/InputNumber';
// import {Button} from '../../components/Button';
// import {Container, InputDate, Separator, Sentence} from './Home.styles';

// import { useSelector } from 'react-redux';

export const Home = () => {

    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [amount, setAmount] = useState();

    const navigate = useNavigate();

    //const date = useSelector((state) => state.trainingDay.date);

    const handleOnClick = () => {
        //navigate('/spendings');
        console.log("date", date)
        console.log("name", name)
        console.log("amount", amount, "€")
    }

    return (
        <Layout>
            <MonthIncome />
            <AddIncome
                date={date}
                setDate={setDate}
                name={name}
                setName={setName}
                amount={amount}
                setAmount={setAmount}
                handleOnClick={handleOnClick}
            />
        </Layout>

    );
};

export default Home;



