import {
    LateralMenuContainer,
    FilterSpendings,
    Divider
} from "./LateralMenu.styles";

import { categories } from "../../categories";
const LateralMenu = () => {
    return (
        <div>
            <LateralMenuContainer>
                <p>Inicio</p>
                <p>Calendario</p>
                <p>Gastos del Mes</p>

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