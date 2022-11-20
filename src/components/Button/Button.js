import {PrimaryButton} from './Button.styles';

export const Button = ({onClick, text}) => {
    return <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
};

export default Button;