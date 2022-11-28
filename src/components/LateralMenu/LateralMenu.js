import { Link } from "react-router-dom";

import {
    LateralMenuContainer,
    FilterSpendings,
    Divider,
    NavLinks
} from "./LateralMenu.styles";

import { categories } from "../../categories";
const LateralMenu = () => {
    return (
        <div>
            <LateralMenuContainer>
                <NavLinks to={'/'}>Inicio</NavLinks>
                <NavLinks to={'/'}>Calendario</NavLinks>
                <NavLinks to='/spendings'>Gastos del Mes</NavLinks>

                <Divider></Divider>

                <p>Tus Gastos</p>
                {categories ? categories.map((e, i) =>
                    <div key={i}>
                        <FilterSpendings>{e.name}</FilterSpendings>
                    </div>
                ) : ''}
            </LateralMenuContainer>

        </div>
    );
}

export default LateralMenu;