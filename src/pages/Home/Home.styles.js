import styled from 'styled-components';

const font = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,700;1,500&display=swap';

const Container = styled.div`
   @import url('${font}');


   background-color: #121417;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 30%;
`;

const InputDate = styled.div`
    height: 60px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #84bd00;
`;

const Separator = styled.div`
    margin: 8px;
    font-size: 3rem;
    font-weight: bold;
    color: white;
`;

const Sentence = styled.div`

    color: white;
    height: 200px; 
    width: 65%;
    padding-top: 10%; 
    font-size: 1.2rem;
    font-family: 'Rock Salt', cursive;
`;




export {Container, InputDate, Separator, Sentence};