import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

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

    const userName = useSelector((state) => state.user.name)
    console.log(userName);

    return (
        <UpperMenuContainer >
            <MotokoLogo onClick={() => homePage()}>MOTOKO</MotokoLogo>
            {userName ? userName : ''}
            <Links>
                <Button>Ajustes</Button>
                <Button>Perfil</Button>
            </Links>
        </UpperMenuContainer >
    );
};

export default UpperMenu;