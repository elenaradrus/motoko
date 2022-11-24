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


const Table = () => {

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
        </TableContainer >
    );
}

export default Table;