import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

function HomePage() {
  
  const theme = createMuiTheme({
      palette: {
          primary: {
              main: "#ffffff"
          }
      }
  })  

  const history = useHistory();

  const enterAsCandidate = () => {
    history.push('/trips/list');
  };

  const goToLoginPage = () => {
    history.push('/login');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ width: '90vw' }}>
        <Typography
          component="div"
          style={{
            backgroundColor: 'rgba(0, 0, 12, 0.5)',
            height: '70vh',
            marginTop: '15%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Typography variant="h3" color="primary" component="h1">
            Bem vindo ao LabeX
          </Typography>
          <Typography variant="p" color="primary" component="h4">
            Selecione uma opção para continuar
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: '30%', height: '10%' }}
            onClick={enterAsCandidate}
          >
            Usuário
          </Button>
          <Typography variant="p" color="primary" component="h4">
            ou
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: '30%', height: '10%' }}
            onClick={goToLoginPage}
          >
            Admin
          </Button>
        </Typography>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default HomePage;
