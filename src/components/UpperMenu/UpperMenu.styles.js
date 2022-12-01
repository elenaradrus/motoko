import styled from 'styled-components';

import { 
    font,
    green,
    orange,
    fontFamily,
    grey 
} from '../../styles/styles.template';

const UpperMenuContainer = styled.div`
    //@import url('${font}'); 
    font-family: ${fontFamily};
    display: flex;
    justify-content: space-around;
    box-shadow: 7px 7px 19px -11px rgba(0,0,0,0.75);
`;

const MotokoLogo = styled.h1`
    padding-right: 20rem;
    color: ${orange};
    &:hover {
        color: ${green};
        cursor: pointer;
}
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-left: 30rem;
`;

const Button = styled.button`
    font-family: ${fontFamily};
    font-weight: 200;
    font-size: 1rem;
    color: white;
    letter-spacing: .2rem;
    width: 8rem;
    height: 2rem;
    border-style: none;
    border-radius: .3rem;
    background-color: ${green}; 
    &:hover {
        text-decoration: underline;
    }
`;


export { UpperMenuContainer, Links, Button, MotokoLogo };