import styled from 'styled-components';

const Container = styled.div`

   background-color: #121417;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 20%;
   color: white;
`;

const ExerciseCard = styled.div`
    color: white;
    border: solid 1px #84bd00;
    border-radius: 3px;
    width: 70%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`





export {Container, ExerciseCard};