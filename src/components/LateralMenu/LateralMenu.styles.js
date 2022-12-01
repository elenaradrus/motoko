import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { 
    font,
    green,
    orange,
    fontFamily,
    grey 
} from '../../styles/styles.template';

const LateralMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-top: 2rem;
    background-color: ${grey};
    width: 15rem;
    height: 100vh;
    font-family: ${fontFamily};
    font-weight: 100;
    letter-spacing: .2rem;
    box-shadow: 7px 7px 19px -11px rgba(0,0,0,0.75);
`;

const FilterSpendings = styled.p`
    font-size: .7rem;
`;

const Divider = styled.hr`
    display: flex;
    justify-content: flex-start;
    width: 10rem;
`;

const NavLinks = styled(Link)`
    text-decoration: none;
    color: black;
    padding-bottom: 1rem;
    &:hover,
    &:focus,
    &:active {
        color: ${orange}
    }
`;



export { LateralMenuContainer, FilterSpendings, Divider, NavLinks };