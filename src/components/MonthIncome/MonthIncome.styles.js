import styled from 'styled-components';
import { font, fontFamily, green, orange, grey } from '../../styles/styles.template';

const IncomeContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Table = styled.table`
    width: 60%;
    border-collapse: collapse;
    box-shadow: 7px 7px 19px -11px rgba(0,0,0,0.75);
`;

const Tr = styled.tr`
    border-bottom: 1px solid ${grey};
    height: 2rem;
    &:hover {
        background-color: ${grey};
    }
`;

const Th = styled.th`
    background-color: ${green};
    font-weight: 100;
    color: white;
    border-collapse: collapse;
    text-align: left;
    padding-left: 1rem;
`;

const ThPrice = styled.td`
    background-color: ${green};
    font-weight: 100;
    color: white;
    border-collapse: collapse;
    text-align: right;
    width: 15%;
    padding-right: 1.5rem;
`;

const Td = styled.td`
    border-collapse: collapse;
    padding-left: 1rem;
`;

const TdPrice = styled.td`
    text-align: right;
    width: 15%;
    padding-right: 1.5rem;
`;

export {
    Table,
    IncomeContainer,
    Tr,
    Th,
    ThPrice,
    Td,
    TdPrice
};