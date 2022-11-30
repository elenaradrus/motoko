import { useState } from 'react';
import { categories } from '../../categories';
import {
    AddSpendingContainer,
    Button,
    Input,
    InputType,
    Select,
    Option,
    DateAndCategory,
    Date,
    Category,
    Label,
    Description,
    PriceAndButton,
    Price
} from './AddSpending.styles';


const AddSpending = () => {

    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Fijos');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, category, description, amount);
    };



    return (
        <AddSpendingContainer>

            <DateAndCategory>
                <Date>
                    <Label>Fecha</Label>
                    <InputType
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Date>

                <Category>
                    <Label>Categoria</Label>
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories ? categories.map((e, i) =>
                            <Option key={i}>
                                {e.name}
                            </Option>
                        ) : ''}
                    </Select>
                </Category>
            </DateAndCategory>

            <Description>
                <Label>Descripción</Label>
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Description>

            <PriceAndButton>
                <Price>
                    <Label>Precio</Label>
                    <InputType
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Price>

                <Button onClick={(e) => handleSubmit(e)}>Añadir gasto</Button>
            </PriceAndButton>

        </AddSpendingContainer>
    );

}

export default AddSpending;