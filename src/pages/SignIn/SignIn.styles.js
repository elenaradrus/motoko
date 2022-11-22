import styled from 'styled-components';
import { isDesktop } from '../../utils/devices';

import { 
   font,
   green,
   orange,
   fontFamily  
} from '../../styles/styles.template';


const Container = styled.div`
   @import url('${font}');
   font-family: 'Raleway', sans-serif;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   margin: 0 auto; 
   @media (min-width: 1280px) {
      display: flex;
      flex-direction: row;
   }
`;

const WelcomeBanner = styled.div`
@media (min-width: 1280px) {
   width: 60%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}  
`;

const Form = styled.div`
@media (min-width: 1280px) {
   width: 40%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
`;


export { Container, WelcomeBanner, Form };