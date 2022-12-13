import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Layout from "../../components/Layout/Layout";
import AddSpending from "../../components/AddSpending/AddSpending";
import SpendingsDataService from '../../services/spendings';



const Spendings = () => {

    const [spendings, setSpendings] = useState();
    const [isLoadingSpendings, setLoadingSpendings] = useState(false);


    useEffect(() => {
        if (!spendings) {
            const spendings = [];
            setLoadingSpendings(true);
            SpendingsDataService.getSpendings().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    spendings.push({ id: doc.id, data: doc.data() });
                });
                setSpendings(spendings)
                setLoadingSpendings(false);
            });
        };
    }, [spendings]);



    return (
        <Layout>
            {isLoadingSpendings ? 'Cargando gastos' : <Table spendings={spendings}/>}
            <AddSpending />
        </Layout>
    );
}

export default Spendings;