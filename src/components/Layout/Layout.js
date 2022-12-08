import UpperMenu from "../UpperMenu/UpperMenu";
import LateralMenu from "../LateralMenu/LateralMenu";
import {
    LayoutContainer,
    Children
} from "./Layout.styles";


const Layout = ({ children }) => {
    return (
        <div>
            <UpperMenu />
            <LayoutContainer>
                <LateralMenu />
                <Children>
                    {children}
                </Children>
            </LayoutContainer>
        </div>
    );
}

export default Layout;