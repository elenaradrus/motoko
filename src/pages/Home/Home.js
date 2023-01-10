import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import MonthIncome from '../../components/MonthIncome/MonthIncome';
import AddIncome from '../../components/AddIncome/AddIncome';
import { useEffect, useState } from 'react';

import IncomeDataService from '../../services/income';

// import { useSelector } from 'react-redux';

export const Home = () => {

    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [amount, setAmount] = useState();

    const [income, setIncome] = useState();
    const [updateIncome, setUpdateIncome] = useState();

    const [message, setMessage] = useState();

    useEffect(() => {
      const income = [];
      IncomeDataService.getIncome().then((querySnapshot) => {
          querySnapshot.forEach(doc => {
              income.push({id: doc.id, data: doc.data()});
          });
          setIncome(income);
          console.log(income)
      });
    }, [updateIncome])
    

    //const navigate = useNavigate();

    //const date = useSelector((state) => state.trainingDay.date);

    const handleOnClick = async (e) => {
        e.preventDefault();
        console.log("date", date)
        console.log("name", name)
        console.log("amount", amount, "€")

        if(date === "" || name === "" || amount == (0 || NaN || undefined || "")) {
            setMessage("Todo los campos son obligatorios");
        } else {
            try {
                const result = await IncomeDataService.addNewIncome({date, name, amount: +amount})
                console.log("ingreso añadido en BD", result)
                setUpdateIncome(!updateIncome);
                setMessage("Gasto añadido");
            } catch (error) {
                console.log("income error", error)
                setMessage("No se ha podido guardar tu ingreso. Inténtalo de nuevo");
            };
        };  
    };

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
            {message}
        </Layout>

    );
};

export default Home;



