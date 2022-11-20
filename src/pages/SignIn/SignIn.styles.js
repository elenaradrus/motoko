import styled from 'styled-components';

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
`;

export { Container };