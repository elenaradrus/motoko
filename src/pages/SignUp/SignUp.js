import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { 
    Container, 
    Label, 
    Section, 
    Input, 
    Button, 
    Span
} from './SignUp.styles';

import AuthDataService from '../../services/auth';
import UsersDataService from '../../services/users';

export const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

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
        console.log('email', email);
        console.log('password', password);
        if (name === '' || email === '' || password === '') {
            console.log('Todos los campos son obligatorios')
        } else {
            try {
                //await AuthDataService.signUp(email, password);
                await AuthDataService.signUp(email, password).then((userCredentials) => {
                    console.log('response: ', userCredentials.user);
                    const { uid, email } = userCredentials.user;
                    // 1. ¿este usuario existe? 
                    // user.uid;
                    // user.email;
                    // user.accessToken
                    UsersDataService.addUser({ uid, email, name }).then(() => {
                        console.log('el usuario se ha creado correctamente');
                    }).catch(err => console.log('error: ', err));
                }).catch(err => { console.log('error: ', err) });
                // navigate('/');
            } catch (err) {
                console.log('🚀 TLC ~ file: SignUp.js ~ line 21 ~ handleSubmit ~ err', err.message);
            }

            navigate('/');
        }
    };

    const signin = () => {
        navigate('/sign-in');
    }

    return <Container>
        <Section>
            <p>MOTOKO</p>
            <h2>Crear una cuenta</h2>
            <Button>Iniciar Sesión con Google</Button>
            <p>O</p>
        </Section>

        <Section>
            <Label>
                Nombre
                <Input onChange={(e) => setName(e.target.value)} type="text" />
            </Label>
        </Section>

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
            {/* <P>La contraseña ha de contener letras y números</P> */}
        </Section>

        {/* <Section>
            <Label>
                Confirmar contraseña
                <Input onChange={(e) => console.log(e.target.value)} type="password" />
            </Label>
        </Section>  */}

        <Section>
            <Button onClick={(e) => handleSubmit(e)}>Crear cuenta</Button>
            <p>¿Ya tienes cuenta? <Span onClick={() => signin()}>Inicia sesión</Span></p>
        </Section>


    </Container>
};

export default SignUp;

