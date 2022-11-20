import styled from 'styled-components';


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
`;

const Section = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center; 
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
  }
`;

// const P = styled.p`
//    font-size: .85rem;
//    color: grey;
// `;

const Button = styled.button`
   @import url('${font}');
   font-family: 'Raleway', sans-serif;
   font-size: 1rem;
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
`;


export { Container, Label, Section, Input, Button, Span };

/*
 @import url('${font}');
   font-family: 'Raleway', sans-serif';
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
  } */