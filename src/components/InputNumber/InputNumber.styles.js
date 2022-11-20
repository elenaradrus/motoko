import styled from 'styled-components';

const Number = styled.input`
   background-color: #121417;
   height: ${props => props.height};
   width: ${props => props.width};
   color: white;
   font-size: ${props => props.fontSize};
   border-style:solid;
   border: none;
   text-align: center;
`;

export {Number};