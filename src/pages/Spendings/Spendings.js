import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";

const Spendings = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Spendings Page</h1>
            <p onClick={() => handleOnClick()}>Volver al inicio</p>
            <Table />
        </div>
    );
}

export default Spendings;