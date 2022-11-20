import styled from 'styled-components';

const font = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,700;1,500&display=swap';

const Container = styled.div`
  @import url('${font}');

  max-width: 100%;
  height: 100vh;
  border: 5px dashed #ff6550;
  display: flex;
  flex-direction: column;
  font-family: 'Raleway';
  padding: 0 20% 0 20%;
`;

const Header = styled.div`
  border: 5px dashed #ff6550;
  height: 10%;
  font-size: 5rem;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  border: 5px dashed #ff6550;
  height: 6%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
  width: 50%;
  font-family: 'Raleway';
`;

export {
    Container,
    Header,
    InputWrapper,
    Input,
}