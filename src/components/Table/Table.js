import {
    Title,
    TitlePrice,
    TitleDate,
    SpendingsTable,
    Description,
    TableContainer,
    TableRow,
    DescriptionPrice,
    DescriptionDate
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
            <AddSpending/>
        </TableContainer >
    );
}

export default Table;