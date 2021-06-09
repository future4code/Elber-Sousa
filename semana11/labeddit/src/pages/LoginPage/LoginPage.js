import React from 'react';
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styles';
import NameLogo from '../../assets/NameLogo.png';
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm';
import { goToSignUp } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({ setRightButtonText }) => {
  const history = useHistory();
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <LogoImage src={NameLogo} />
      <LoginForm setRightButtonText={setRightButtonText} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={'submit'}
          fullWidth
          variant={'text'}
          color={'primary'}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
