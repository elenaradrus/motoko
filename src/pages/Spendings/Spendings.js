import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Layout from "../../components/Layout/Layout";
import AddSpending from "../../components/AddSpending/AddSpending";
import SpendingsDataService from '../../services/spendings';



const Spendings = () => {

    const [spendings, setSpendings] = useState();
    const [isLoadingSpendings, setLoadingSpendings] = useState(false);

    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Fijos');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();

    const [newSpending, setNewSpending] = useState();
    const [updateSpendingTable, setUpdateSpendingTable] = useState(false);


    useEffect(() => {
        const spendings = [];
        setLoadingSpendings(true);
        SpendingsDataService.getSpendings().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                spendings.push({ id: doc.id, data: doc.data() });
            });
            setSpendings(spendings)
            console.log(spendings)
            setLoadingSpendings(false);
        });
    }, [updateSpendingTable]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("date", date)
        console.log("category", category)
        console.log("description", description)
        console.log("amount", amount)
        try {
            const result = await SpendingsDataService.addNewSpending({ date, category, description, amount: +amount })
            console.log("documento creado: ", result.id);
            setUpdateSpendingTable(!updateSpendingTable);
        } catch (error) {
            console.log("spendings error", error);
        }
    };

    const renderTable = () =>{
        if(spendings === undefined && isLoadingSpendings){
            return 'Cargando gastos';
        }

        if(spendings){
            return  <Table spendings={spendings} />;
        }
    }

    return (
        <Layout> 
            {renderTable()}
            <AddSpending
                date={date}
                setDate={setDate}
                category={category}
                setCategory={setCategory}
                description={description}
                setDescription={setDescription}
                amount={amount}
                setAmount={setAmount}
                handleSubmit={handleSubmit}
            />
        </Layout>
    );
}

export default Spendings;