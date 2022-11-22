import { useNavigate } from "react-router-dom";

const Spendings = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    }
    return ( 
        <div>
            <h1>Spendings Page</h1>
            <p onClick={() => handleOnClick()}>Volver al inicio</p>
        </div>
     );
}
 
export default Spendings;