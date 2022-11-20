import {Number} from './InputNumber.styles';

export const InputNumber = ({
    fontSize = '3rem', 
    height = '50px', 
    width = '60px', 
    value = 0,
    onChange,
}) => {

    console.log('value: ', value);

    return <Number 
        fontSize={fontSize} 
        width={width}
        height={height}
        type="number"
        onChange={onChange}
        value={value}
        />
}

export default InputNumber;