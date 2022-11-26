import styled from 'styled-components';

import { 
    font,
    green,
    orange,
    fontFamily,
    grey 
} from '../../styles/styles.template';

const LateralMenuContainer = styled.div`
    padding-left: 2rem;
    padding-top: 2rem;
    background-color: ${grey};
    width: 15rem;
    height: 100vh;
    font-family: ${fontFamily};
    font-weight: 100;
    letter-spacing: .2rem;
`;

const FilterSpendings = styled.p`
    font-size: .7rem;
`;

const Divider = styled.hr`
    display: flex;
    justify-content: flex-start;
    width: 10rem;
`;



export { LateralMenuContainer, FilterSpendings, Divider };