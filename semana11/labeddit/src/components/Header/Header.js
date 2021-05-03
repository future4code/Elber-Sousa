import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolBar, StyledImg } from './styled';
import { goToHomePage, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem('token');
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText('Login');
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <StyledImg src={Logo}></StyledImg>
        <Button onClick={() => goToHomePage(history)} color="inherit">
          Home
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
