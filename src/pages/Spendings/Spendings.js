import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import UpperMenu from "../../components/UpperMenu/UpperMenu";

const Spendings = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    }
    return (
        <div>
            <UpperMenu/>
            <h1>Spendings Page</h1>
            <Table />
        </div>
    );
}

export default Spendings;