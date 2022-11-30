import styled from 'styled-components';
import { resolution, isMobile, isTablet, isDesktop } from '../../utils/devices';


const font = 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;700&display=swap';
const green = '#7B876D';
const orange = '#C4661F';

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
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
    }
   }
`;

const Container2 = styled.div`
   @import url('${font}');
   font-family: 'Raleway', sans-serif;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100%;
   margin: 0 auto; 
   @media (min-width: 1280px) {
      width: 100%;
   }
`;



const Section = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center; 
   font-weight: 200;
`;

const Label = styled.label`
   width: 85%;
`;

const Input = styled.input`
   color: ${green};
   border-radius: .3rem;
   border: 1px solid transparent;
   padding: .5rem;
   background-color: #CDDAD8;
   width: 94%;
   margin-bottom: 1rem;
   &:focus {
      outline: none;
      border: 2px solid ${orange};
  };
  @media (min-width: 1280px) {
   width: 96%;
}
`;

const Button = styled.button`
   @import url('${font}');
   font-family: 'Raleway', sans-serif;
   font-size: 1rem;
   font-weight: 200;
   border-style: none;  
   border-radius: .3rem;
   padding: .7rem;
   margin-top: 1rem;
   color: white;
   background-color: ${green};
   width: 85%;
`;

const Span = styled.span`
   color: ${green};
   &:hover {
      cursor: pointer;
      text-decoration: underline;
  }
`;

const Left = styled.div`
   height: 100%;
   width: 30%;
`;

const Right = styled.div`
   height: 100%;
   width: 100%;
   @media (min-width: 1280px) {
      width: 70%;
   }
`;

export { Left, Right, Container, Label, Section, Input, Button, Span, Container2 };

