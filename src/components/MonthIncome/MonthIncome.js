import { 
    Table,
    IncomeContainer,
    Tr,
    Th,
    ThPrice,
    Td,
    TdPrice
} from "./MonthIncome.styles";

const MonthIncome = () => {
    return (
        <IncomeContainer>
            <Table>

                <thead>
                    <Tr>
                        <Th>Fecha</Th>
                        <Th>Nombre</Th>
                        <ThPrice>Precio</ThPrice>
                    </Tr>
                </thead>

                <tbody>
                    <Tr>
                        <Td>01/01/2023</Td>
                        <Td>Nómina</Td>
                        <TdPrice>1450 €</TdPrice>
                    </Tr>
                    <Tr>
                        <Td>12/01/2023</Td>
                        <Td>Sesión Fotografía</Td>
                        <TdPrice>550 €</TdPrice>
                    </Tr>
                </tbody>

            </Table>
        </IncomeContainer>
    );
}

export default MonthIncome;