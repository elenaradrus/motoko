import React, {useRef} from 'react';

import { 
    Container, 
    Header, 
    InputWrapper,
    Input,
 } from './TodoList.styles';

export const TodoList = () => {
    const inputTask = useRef(null);

    const handleOkKey = (e) => {
        const ENTER = 13;

        if(e.keyCode === ENTER){
            console.log('teclas: ', e.target.value);
            inputTask.current.value='';
            console.log('si, ha pulsado intro');
        }
    }


    return <Container>
        <Header>Todo List</Header>
        <InputWrapper>
            <Input 
                onKeyDown={(e) => handleOkKey(e)}
                type="text" 
                placeholder="¿que tienes que hacer hoy?" 
                ref={inputTask}
            />
        </InputWrapper>
    </Container>;
}