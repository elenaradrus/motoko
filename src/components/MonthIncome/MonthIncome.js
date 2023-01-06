import {
    Table,
    IncomeContainer,
    Tr,
    Th,
    ThPrice,
    Td,
    TdPrice
} from "./MonthIncome.styles";

const MonthIncome = ({ income }) => {
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
                    {income ? income.map((income, index) =>
                        <Tr key={index}>
                            <Td>{income.data.date}</Td>
                            <Td>{income.data.name}</Td>
                            <TdPrice>{income.data.amount}</TdPrice>
                        </Tr>
                    ) : ''}
                </tbody>

            </Table>
        </IncomeContainer>
    );
}

export default MonthIncome;