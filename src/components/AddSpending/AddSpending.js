import { useState } from 'react';
import { categories } from '../../categories';
import {
    AddSpendingContainer,
    Button,
    Input,
    Select,
    Option,
    Date,
    Category,
    Label,
    Description,
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

            <Date>
                <Label>Fecha</Label>
                <Input
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

            <Description>
                <Label>Descripción</Label>
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Description>

            <Price>
                <Label>Precio</Label>
                <Input
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </Price>

            <Button onClick={(e) => handleSubmit(e)}>Añadir gasto</Button>

        </AddSpendingContainer >
    );

}

export default AddSpending;