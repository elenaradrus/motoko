import styled from 'styled-components';
import { font, fontFamily, green, orange, grey } from '../../styles/styles.template';

const TableRow = styled.tr`
    border-bottom: 1px solid ${grey};
    height: 2rem;
    &:hover {
        background-color: ${grey};
    }
`;

const TableContainer = styled.div`
    @import url('${font}');
    font-family: ${fontFamily};
    font-weight: 100;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    height: fit-content;
    
`;

const SpendingsTable = styled.table`
    border-collapse: collapse;
    width: 60rem;
    box-shadow: 10px 10px 35px -16px rgba(0,0,0,0.75);
`;

const Title = styled.th`
    background-color: ${green};
    font-weight: 100;
    color: white;
    border-collapse: collapse;
    text-align: left;
    padding-left: 1rem;
`;

const TitlePrice = styled.th`
    background-color: ${green};
    font-weight: 100;
    color: white;
    text-align: right;
    padding-right: 1rem;

`;

const TitleDate = styled.th`
    background-color: ${green};
    font-weight: 100;
    color: white;
    text-align: left;
    padding-left: 1rem;

`;

const Description = styled.td`
    border-collapse: collapse;
    padding-left: 1rem;
`;

const DescriptionPrice = styled.td`
    text-align: right;
    width: 15%;
    padding-right: 1rem;
`;

const DescriptionDate = styled.td`
    text-align: left;
    width: 15%;
    padding-left: 1rem;
`;



export { Title, TitlePrice, TitleDate, SpendingsTable, Description, TableContainer, TableRow, DescriptionPrice, DescriptionDate }