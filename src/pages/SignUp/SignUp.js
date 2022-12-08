import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Welcome from '../../components/Welcome/Welcome';
import { resolution, isMobile, isTablet, isDesktop } from '../../utils/devices';
import { useDispatch } from 'react-redux'

import {
    Container,
    Label,
    Section,
    Input,
    Button,
    Span,
    Container2,
    Left,
    Right,
} from './SignUp.styles';

import {getUserSuccess, getUserError} from '../../store/User/actions';


import AuthDataService from '../../services/auth';
import UsersDataService from '../../services/users';

export const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const checkIfUserExist = async (id, email) => {
        console.log('🚀 TLC ~ file: SignUp.js ~ line 15 ~ checkIfUserExist ~ id', id)
        try {
            const docSnap = await UsersDataService.getUser(id);
            console.log('the record id is: ', docSnap.data());
            if (docSnap.data()) {
                console.log('el usuario ya existe en users');
            } else {
                console.log('el usuario no existe en users');
                UsersDataService.addUser({ uid: id, email, name })
            }
        } catch (err) {
            console.log('🚀 TLC ~ file: SignIn.js ~ line 19 ~ checkIfUserExist ~ err', err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('email', email);
        // console.log('password', password);
        // console.log('name', name);
        if (name === '' || email === '' || password === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            try {
                //await AuthDataService.signUp(email, password);
                await AuthDataService.signUp(email, password).then((userCredentials) => {
                    console.log('response: ', userCredentials.user);
                    const { email, uid } = userCredentials.user;
                    // console.log('email: ', email);
                    // console.log('uid: ', uid);
                    UsersDataService.addUser({ email, name, uid }).then(() => {
                        //console.log(uid)
                        console.log('el usuario se ha creado correctamente');
                        UsersDataService.getLoggedUser(uid).then(user => {
                            dispatch(getUserSuccess(
                                {
                                    name: user.data.name,
                                    uid: user.data.uid,
                                    email: user.data.email,
                                    id: user.id
                                }
                            ));
                            navigate('/');
                        }).catch(err => dispatch(getUserError(err)));
                    }).catch(err => console.log('error: ', err));
                }).catch(err => { console.log('error: ', err) });
            } catch (err) {
                console.log('🚀 TLC ~ file: SignUp.js ~ line 21 ~ handleSubmit ~ err', err.message);
            }
        }
    };


    const signin = () => {
        navigate('/sign-in');
    };

    const motokoLogo = () => {
        return (
            <p>Motoko</p>
        );
    };

    const renderForm = () => {
        return (
            <Container2>
                <Section>
                    {isDesktop ? null : motokoLogo()}
                    <h2>Crear una cuenta</h2>
                    <Button>Iniciar Sesión con Google</Button>
                    <p>O</p>
                </Section>
                <Section>
                    <Label>
                        Nombre
                        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    </Label>
                </Section>
                <Section>
                    <Label>
                        Email
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                    </Label>
                </Section>
                <Section>
                    <Label>
                        Contraseña
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </Label>
                    {/* <P>La contraseña ha de contener letras y números</P> */}
                </Section>
                <Section>
                    <Button onClick={(e) => handleSubmit(e)}>Crear cuenta</Button>
                    <p>¿Ya tienes cuenta? <Span onClick={() => signin()}>Inicia sesión</Span></p>
                </Section>
            </Container2>
        );
    }


    return <Container>
        {isDesktop ? <Welcome /> : null}
        <Right>
            {renderForm()}
        </Right>
    </Container>
};

export default SignUp;

