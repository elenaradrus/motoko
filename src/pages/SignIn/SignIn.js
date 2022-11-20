import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './SignIn.styles';
import { Section, Label, Input, Button } from '../SignUp/SignUp.styles';

import AuthDataService from '../../services/auth';


export const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('email', email);
        console.log('password', password);

        try {
            await AuthDataService.login(email, password).then((userCredentials) => {
                console.log('userCredentials: ', userCredentials);
                // navigate('/');
            });
        } catch (err) {
            console.log('🚀 TLC ~ file: signIn.js ~ line 21 ~ handleSubmit ~ err', err.message);
        }
    }


    return <Container>
        <Section>
            <Label>
                Email
                <Input onChange={(e) => setEmail(e.target.value)} type="text" />

            </Label>
        </Section>

        <Section>
            <Label>
                Contraseña
                <Input onChange={(e) => setPassword(e.target.value)} type="password" />
            </Label>
        </Section>

        <Section>
            <Button onClick={(e) => handleSubmit(e)}>Iniciar Sesión</Button>
        </Section>

    </Container>
};

export default SignIn;