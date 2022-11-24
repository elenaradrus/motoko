import { Title, SpendingsTable, Description, TableContainer, TableRow, DescriptionPrice, DescriptionDate } from "./Table.styles";

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
                    <DescriptionDate>1 Mayo 2022</DescriptionDate >
                    <Description>Restaurantes</Description>
                    <Description>Udon</Description>
                    <DescriptionPrice>38.90 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>3 Mayo 2022</DescriptionDate>
                    <Description>Fijo</Description>
                    <Description>Luz</Description>
                    <DescriptionPrice>32.97 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>5 Mayo 2022</DescriptionDate>
                    <Description>Fijo</Description>
                    <Description>Abono transporte</Description>
                    <DescriptionPrice>54.60 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>8 Mayo 2022</DescriptionDate>
                    <Description>Mascota</Description>
                    <Description>Vacuna Lara</Description>
                    <DescriptionPrice>42.33 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>12 Mayo 2022</DescriptionDate>
                    <Description>Fijo</Description>
                    <Description>Agua</Description>
                    <DescriptionPrice>20.44 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>15 Mayo 2022</DescriptionDate>
                    <Description>Fijo</Description>
                    <Description>Alquiler</Description>
                    <DescriptionPrice>650 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>15 Mayo 2022</DescriptionDate>
                    <Description>Supermercados</Description>
                    <Description>Compra semanal</Description>
                    <DescriptionPrice>63.58 €</DescriptionPrice>
                </TableRow>
                <TableRow>
                    <DescriptionDate>23 Mayo 2022</DescriptionDate>
                    <Description>Ocio</Description>
                    <Description>Cine</Description>
                    <DescriptionPrice>39.85 €</DescriptionPrice>
                </TableRow>
            </SpendingsTable>
        </TableContainer>
    );
}

export default Table;