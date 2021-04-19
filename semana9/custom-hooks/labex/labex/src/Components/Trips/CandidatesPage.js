import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const baseUrl =
  'https://us-central1-labenu-apis.cloudfunctions.net/labeX/elber-sousa';

function CandidatesPage() {
  const [trips, setTrips] = useState([]);
  const [token, setToken] = useState(null);
  const [currentTripId, setCurrentTripId] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setToken(token);

    console.log(token);
  }, [history]);

  function getTripIds() {
    const axiosConfig = {
      headers: {
        auth: token
      }
    };
    axios
      .get(`${baseUrl}/trips`, axiosConfig)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function fetchCandidates(event) {
    const axiosConfig = {
      headers: {
        auth: token
      }
    };

    const tripId = event.target.value;
    setCurrentTripId(tripId);

    axios
      .get(`${baseUrl}/trip/${tripId}`, axiosConfig)
      .then((response) => {
        setCandidates(response.data.trip.candidates);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff'
      }
    }
  });

  const userApproved = (candidateId) => {
    const body = {
      approve: true
    };
    const axiosConfig = {
      headers: {
        auth: token
      }
    };

    const currentCandidate = candidateId;

    axios
      .put(
        `${baseUrl}/trips/${currentTripId}/candidates/${currentCandidate}/decide`,
        body,
        axiosConfig
      )

      .then(() => {
        alert('Candidato(a) aprovado(a)!');
        window.location.reload(true);
      })
      .catch((e) => {
        console.log('erro: ' + e);
      });
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
            <Typography variant="h5" color="primary" component="h1">
              Selecione a viagem:
            </Typography>
            <select onChange={fetchCandidates}>
              <option value="" />
              {trips.map((trip) => {
                return <option value={trip.id}>{trip.name}</option>;
              })}
            </select>
            <Typography variant="h5" color="primary" component="h1">
              Candidatos:
            </Typography>
            <div>
              {candidates.length === 0 && (
                <p>Não há candidatos nesta viagem.</p>
              )}

              {candidates.map((candidate) => {
                return (
                  <div
                    style={{
                      minHeight: '22.5vh',
                      color: 'white',
                      textAlign: 'left',
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 10,
                      margin: '0 auto',
                      width: '90%',
                      backgroundColor: '#bde1fc',
                    }}
                  >
                    <p>
                      <strong>Nome:</strong> {candidate.name}
                    </p>
                    <p>
                      <strong>Idade:</strong> {candidate.age}
                    </p>
                    <p>
                      <strong>Texto de aplicação:</strong>{' '}
                      {candidate.applicationText}
                    </p>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 25
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => userApproved(candidate.id)}
                      >
                        Aprovar
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {getTripIds()}
          </Typography>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default CandidatesPage;
