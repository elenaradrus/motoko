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


const Table = () => {

    // const price = spendings.map(e => e.price);
    // //console.log(price);
    // const sum = price.reduce((a, b) => a + b, 0);
    // //console.log(sum)
    const [spendings, setSpendings] = useState();

    // const getSpendings = async () => {
    //     try {
    //         const data = await SpendingsDataService.getSpendings()
    //         setSpendings(data.docs.map(docs => docs.data()))
    //         console.log("spendings", spendings)
    //     } catch (error) {
    //         console.log("show spending", error)

    //     }
    // }

    useEffect(async () => {
        if(!spendings){
            try {
                const data = await SpendingsDataService.getSpendings()
                setSpendings(data.docs.map((docs) => docs.data()))
            } catch (error) {
                console.log("show spending", error)
            }
        }
    },[spendings])

    console.log("spendings", spendings)
    

    return (
        <TableContainer>
            {/* <TotalSpendings>Total gastos: {sum} €</TotalSpendings> */}
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
                        <DescriptionPrice>{e.amount} €</DescriptionPrice>
                    </TableRow>
                ) : ''}
            </SpendingsTable>
        </TableContainer >
    );
}

export default Table;