import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import UpperMenu from "../../components/UpperMenu/UpperMenu";
import Layout from "../../components/Layout/Layout";
import AddSpending from "../../components/AddSpending/AddSpending";


const Spendings = () => {
    
    return (
        <Layout>
            {/* <Table /> */}
            <AddSpending />
        </Layout>
    );
}

export default Spendings;