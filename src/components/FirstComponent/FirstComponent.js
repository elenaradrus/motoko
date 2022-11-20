import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import addOne from '../../store/Counter/actions';

import Message from './FirstComponent.styles';

export const FirstComponent = () => {
    const dispatch = useDispatch(); 
    const counter = useSelector((state) => state.counter.count);

    const handleOnClick = () => {
        console.log('onclick');

        dispatch(addOne());

    }

    return <Message onClick={() => handleOnClick()}>AA: {counter}</Message>;
};

