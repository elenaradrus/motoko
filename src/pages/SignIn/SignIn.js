import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux'

import { Container } from './SignIn.styles';
import { Section, Label, Input, Button } from '../SignUp/SignUp.styles';
import Welcome from '../../components/Welcome/Welcome';
import { WelcomeBanner, Form } from './SignIn.styles';
import { resolution, isMobile, isTablet, isDesktop } from '../../utils/devices';

import {getUserSuccess, getUserError} from '../../store/User/actions';


import AuthDataService from '../../services/auth';
import UsersDataService from '../../services/users';


export const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('email', email);
        console.log('password', password);

        try {
            await AuthDataService.login(email, password).then((userCredentials) => {
                const {email, uid} = userCredentials.user;
                console.log('user email: ', email);
                console.log('uid:', uid);
                //navigate('/');

                UsersDataService.getLoggedUser(uid).then(user => {
                    console.log('then user: ', user);
                    dispatch(getUserSuccess(
                        {
                            name: user.data.name,
                            uid: user.data.uid,
                            email: user.data.email,
                            id: user.id
                        }
                    ));
                });
                navigate('/');
            });
        } catch (err) {
            console.log('🚀 TLC ~ file: signIn.js ~ line 21 ~ handleSubmit ~ err', err.message);
            dispatch(getUserError());
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