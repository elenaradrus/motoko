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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: fit-content;
    width: 100%; 
`;

const TotalSpendings = styled.p`
    background-color: ${grey};
    width: 48%;
    padding: .5rem;
    display:flex;
    justify-content: center;
    border-radius: .3rem;
    letter-spacing: .2rem;
    margin-bottom: 2rem;
`;

const SpendingsTable = styled.table`
    border-collapse: collapse;
    width: 60rem;
    margin-bottom: 3rem;
    box-shadow: 7px 7px 19px -11px rgba(0,0,0,0.75);`;

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

const Description = styled.td`
    border-collapse: collapse;
    padding-left: 1rem;
`;

const DescriptionPrice = styled.td`
    text-align: right;
    width: 15%;
    padding-right: 1rem;
`;




export { 
    Title, 
    TitlePrice,
    TotalSpendings,
    SpendingsTable, 
    Description, 
    TableContainer, 
    TableRow, 
    DescriptionPrice  
};