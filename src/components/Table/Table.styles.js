import styled from 'styled-components';

const TableRow = styled.tr`
    border-bottom: 1px solid grey;
    height: 2rem;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    height: fit-content;
`;

const SpendingsTable = styled.table`
    border-collapse: collapse;
    width: 70rem;
    box-shadow: 10px 10px 35px -16px rgba(0,0,0,0.75);
`;

const Title = styled.th`
    background-color: purple;
    color: pink;
    width: 10rem;
    border-collapse: collapse;
`;

const Description = styled.td`
    border-collapse: collapse;
`;



export { Title, SpendingsTable, Description, TableContainer, TableRow }