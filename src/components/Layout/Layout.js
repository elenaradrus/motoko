import UpperMenu from "../UpperMenu/UpperMenu";
import LateralMenu from "../LateralMenu/LateralMenu";
import { LayoutContainer } from "./Layout.styles";

const Layout = () => {
    return (
        <div>
            <UpperMenu />
            <LayoutContainer>
                <LateralMenu />
                Hola mundo
            </LayoutContainer>
        </div>


    );
}

export default Layout;