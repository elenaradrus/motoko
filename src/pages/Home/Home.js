import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import MonthIncome from '../../components/MonthIncome/MonthIncome';
import AddIncome from '../../components/AddIncome/AddIncome';
import { useEffect, useState } from 'react';

import IncomeDataService from '../../services/income';

// import {InputNumber} from '../../components/InputNumber';
// import {Button} from '../../components/Button';
// import {Container, InputDate, Separator, Sentence} from './Home.styles';

// import { useSelector } from 'react-redux';

export const Home = () => {

    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [amount, setAmount] = useState();

    const [income, setIncome] = useState();

    useEffect(() => {
      const income = [];
      IncomeDataService.getIncome().then((querySnapshot) => {
          querySnapshot.forEach(doc => {
              income.push({id: doc.id, data: doc.data()});
          });
          setIncome(income);
          console.log(income)
      });
    }, [])
    

    //const navigate = useNavigate();

    //const date = useSelector((state) => state.trainingDay.date);

    const handleOnClick = async (e) => {
        e.preventDefault();
        console.log("date", date)
        console.log("name", name)
        console.log("amount", amount, "€")

        try {
            const result = await IncomeDataService.addNewIncome({date, name, amount: +amount})
            console.log("ingreso añadido en BD", result)
        } catch (error) {
            console.log("income error", error)
        }
    }

    return (
        <Layout>
            <MonthIncome income={income}/>
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



