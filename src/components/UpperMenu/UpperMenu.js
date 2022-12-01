import { Link, useNavigate } from "react-router-dom";
import { 
    UpperMenuContainer,
    Links, 
    Button,
    MotokoLogo
} from "./UpperMenu.styles";

const UpperMenu = () => {

    const navigate = useNavigate();
    const homePage = () => {
        navigate('/');
    }
    return (
        <UpperMenuContainer >
            <MotokoLogo onClick={() => homePage()}>MOTOKO</MotokoLogo>
            <Links>
                <Button>Ajustes</Button>
                <Button>Perfil</Button>
            </Links>
        </UpperMenuContainer >
    );
};

export default UpperMenu;