import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './SignIn.styles';
import { Section, Label, Input, Button } from '../SignUp/SignUp.styles';
import Welcome from '../../components/Welcome/Welcome';
import { WelcomeBanner, Form } from './SignIn.styles';
import { resolution, isMobile, isTablet, isDesktop } from '../../utils/devices';


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
                navigate('/');
            });
        } catch (err) {
            console.log('🚀 TLC ~ file: signIn.js ~ line 21 ~ handleSubmit ~ err', err.message);
        }
    }

    const welcomeBanner = () => {
        return (
            <WelcomeBanner>
                <Welcome />
            </WelcomeBanner>
        );
    };

    const motokoLogo = () => {
        return (
            <Section>
                <p>Motoko</p>
            </Section>
        );
    };


    return <Container>

        {isDesktop ? welcomeBanner() : null}

        {/* <WelcomeBanner>
            <Welcome />
        </WelcomeBanner> */}

        <Form>
            {isDesktop ? null : motokoLogo()}

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
        </Form>

    </Container>
};

export default SignIn;