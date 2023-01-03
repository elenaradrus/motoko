import {
    AddIncomeContainer

} from "./AddIncome.styles";

import {
    Date,
    Name,
    Price,
    Label,
    Input,
    Button
} from "../AddSpending/AddSpending.styles";

const AddIncome = ({ date, setDate, name, setName, amount, setAmount, handleOnClick }) => {
    return (
        <AddIncomeContainer>
            <Date>
                <Label>Fecha</Label>
                <Input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Date>

            <Name>
                <Label>Nombre</Label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Name>

            <Price>
                <Label>Precio</Label>
                <Input
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </Price>

            <Button onClick={(e) => handleOnClick(e)}>Añadir ingreso</Button>


        </AddIncomeContainer>
    );
}

export default AddIncome;