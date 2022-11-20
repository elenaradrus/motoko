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

const ExercisesDropdown = styled.select`
    background-color: #121417;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    width: 65%;
    padding: 20px;
    padding-bottom: 10px;
    border: none;
    outline: inherit;
    border-bottom: 1px solid #84bd00;
    margin-bottom: 20px;
`;

const NumberSets = styled.span`
    color: white;
    font-size: 1.5rem;
    font-family: 'Rock Salt', cursive;
`;

const InputsContainer = styled.div`
    height: 300px;
    width: 80%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.span`
    font-family: 'Rock Salt', cursive;
    margin: 10px 5px 5px 5px;
`;

const Separator = styled.div`
    border-bottom: solid 5px #84bd00;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 200px;

`;

const SensationsContainer = styled.div`
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SensationImageBox = styled.div`
    display: flex;
    box-sizing: content-box;
    justify-content: center;
    border-bottom: ${props => props.border ? '5px solid #84bd00;' : 'none'};
    margin: 5px;
    height: 120px;
    width: 120px;
`;

export {
    Container, 
    ExercisesDropdown, 
    NumberSets, 
    InputsContainer,
    Label,
    Separator,
    ButtonsContainer,
    SensationsContainer,
    SensationImageBox,
};