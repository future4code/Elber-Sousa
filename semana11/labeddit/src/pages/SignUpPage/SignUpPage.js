import React from 'react';
import NameLogo from '../../assets/NameLogo.png';
import { ScreenContainer } from './styles';
import SignUpForm from './SignUpForm';
import { LogoImage } from './styles';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <LogoImage src={NameLogo} />
      <SignUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export default SignUpPage;
