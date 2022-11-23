import { Title, SpendingsTable, Description, TableContainer, TableRow } from "./Table.styles";

const Table = () => {
    return (
        <TableContainer>
            <SpendingsTable>
                <TableRow>
                    <Title>Fecha</Title>
                    <Title>Categoria</Title>
                    <Title>Descripción</Title>
                    <Title>Precio</Title>
                </TableRow>
                <TableRow>
                    <Description >1 Mayo 2022</Description >
                    <Description>Restaurantes</Description>
                    <Description>Udon</Description>
                    <Description>38.90 €</Description>
                </TableRow>
                <TableRow>
                    <Description>3 Mayo 2022</Description>
                    <Description>Fijo</Description>
                    <Description>Luz</Description>
                    <Description>32.97 €</Description>
               </TableRow>
            </SpendingsTable>
        </TableContainer>
    );
}

export default Table;