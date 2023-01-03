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
    Name,
    Price
} from './AddSpending.styles';


const AddSpending = ({ date, setDate, category, setCategory, description, setDescription, amount, setAmount, handleSubmit }) => {
    
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

            <Name>
                <Label>Nombre</Label>
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Name>

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