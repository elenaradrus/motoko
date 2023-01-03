import styled from "styled-components";
import {
    font,
    fontFamily,
    green,
    orange,
    grey
} from '../../styles/styles.template';


const AddSpendingContainer = styled.div`
    width: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Date = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const Select = styled.select`
    color: ${green};
    border-radius: .3rem;
    border: 1px solid transparent;
    padding: .5rem;
    background-color: #CDDAD8;
    width: 100%;
    margin-bottom: 1rem;
    &:focus {
    outline: none;
    border: 2px solid ${orange};
    }; 
`;

const Label = styled.label`
    letter-spacing: .2rem;
`;

const Option = styled.option`
    &:hover {
        background-color: green;
    };
`;

const Input = styled.input`
   color: ${green};
   border-radius: .3rem;
   border: 1px solid transparent;
   padding: .5rem;
   background-color: #CDDAD8;
   width: 97%;
   margin-bottom: 1rem;
   &:focus {
      outline: none;
      border: 2px solid ${orange};
    };
`;



const Button = styled.button`
   @import url('${font}');
   font-family: 'Raleway', sans-serif;
   font-size: 1rem;
   font-weight: 200;
   letter-spacing: .2rem;
   border-style: none;  
   border-radius: .3rem;
   padding: .7rem;
   color: white;
   background-color: ${green};
   width: 60%;
   margin-top: 1rem;
   margin-bottom: 2rem;
   cursor: pointer;

   &:hover {
    background-color: red;
  }

  &:active{
      background-color: gold;
  }
`;

export {
    AddSpendingContainer,
    Button,
    Input,
    Select, 
    Option,
    Label,
    Date,
    Category,
    Name,
    Price
};