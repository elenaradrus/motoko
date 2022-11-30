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
    align-items: center;
`;

const DateAndCategory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`;

const Date = styled.div`
    display: flex;
    flex-direction: column;
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputType = styled.input`
    color: ${green};
    border-radius: .3rem;
    border: 1px solid transparent;
    padding: .5rem;
    background-color: #CDDAD8;
    width: 90%;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
        border: 2px solid ${orange};
    };
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
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
   width: 35%;
   margin-bottom: 1rem;
   &:focus {
      outline: none;
      border: 2px solid ${orange};
  };
}
`;

const PriceAndButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 37%;
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
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
`;

export {
    AddSpendingContainer,
    Button,
    Input,
    InputType,
    Select, 
    Option,
    DateAndCategory,
    Label,
    Date,
    Category,
    Description,
    PriceAndButton,
    Price
};