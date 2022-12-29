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
import SpendingsDataService from '../../services/spendings';
import { useEffect, useState } from "react";


const Table = ({spendings}) => {

    //console.log("LEO spendings table", spendings);
    //console.log(spendings.map(e => e.data))
    // const price = spendings.map(e => e.price);
    // //console.log(price);
    // const sum = price.reduce((a, b) => a + b, 0);
    // //console.log(sum)
    // const [spendings, setSpendings] = useState();
    //const [message, setMessage] = useState();


    // const price = spendings.map(e => e.amount);
    // console.log(price);
    // const totalAmount = price.reduce((a, b) => a + b, 0);
    // console.log(totalAmount)


    return (
        <TableContainer>
            <TotalSpendings>Total gastos: // €</TotalSpendings>
            <SpendingsTable>
                <TableRow>
                    <Title>Fecha</Title>
                    <Title>Categoria</Title>
                    <Title>Descripción</Title>
                    <TitlePrice>Precio</TitlePrice>
                </TableRow>
                {spendings ? spendings.map((spending, index) =>
                    <TableRow key={index}>
                        <Description>{spending.data.date}</Description>
                        <Description>{spending.data.category}</Description>
                        <Description>{spending.data.description}</Description>
                        <DescriptionPrice>{spending.data.amount} €</DescriptionPrice>
                    </TableRow>
                ) : ''} 
            </SpendingsTable>
        </TableContainer >
    );
}

export default Table;