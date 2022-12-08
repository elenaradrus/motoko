import {
    Title,
    TitlePrice,
    TotalSpendings,
    SpendingsTable,
    Description,
    TableContainer,
    TableRow,
    DescriptionPrice
} from "./Table.styles";

import { spendings } from "../../mock";
import AddSpending from "../AddSpending/AddSpending";


const Table = () => {

    const price = spendings.map(e => e.price);
    console.log(price);
    const sum = price.reduce((a, b) => a + b, 0);
    console.log(sum)

    return (
        <TableContainer>
            <TotalSpendings>Total gastos: {sum} €</TotalSpendings>
            <SpendingsTable>
                <TableRow>
                    <Title>Fecha</Title>
                    <Title>Categoria</Title>
                    <Title>Descripción</Title>
                    <TitlePrice>Precio</TitlePrice>
                </TableRow>
                {spendings ? spendings.map((e, i) =>
                    <TableRow key={i}>
                        <Description>{e.date}</Description>
                        <Description>{e.category}</Description>
                        <Description>{e.description}</Description>
                        <DescriptionPrice>{e.price} €</DescriptionPrice>
                    </TableRow>
                ) : ''}
            </SpendingsTable>
        </TableContainer >
    );
}

export default Table;