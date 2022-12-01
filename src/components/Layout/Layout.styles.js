import styled from 'styled-components';

import { 
    font,
    green,
    orange,
    fontFamily,
    grey 
} from '../../styles/styles.template';

const LayoutContainer = styled.div`
    width: 100vw;  
    height: 100vh; 
    display: flex;
    //background-color: ${orange};
`;

const Children = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export { LayoutContainer, Children };