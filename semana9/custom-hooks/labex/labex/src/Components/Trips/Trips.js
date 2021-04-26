import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '42vh'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  }
});

const Trips = (props) => {
  const { planetFilter, durationFilter } = props;
  const classes = useStyles();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const getFilteredAndOrderedList = () => {
    return (
      trips.filter((trip) => trip.durationInDays > durationFilter) &&
      trips.filter((trip) => trip.planet.includes(planetFilter))
    );
  };

  useEffect(() => {
    getAllTrips();
    getFilteredAndOrderedList();
  });

  const getAllTrips = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/elber-sousa/trips'
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const goToTripApplicationForm = (tripId) => {
    history.push(`/application-form/${tripId}`);
  };

  const filteredAndOrderedList = getFilteredAndOrderedList();

  return (
    <div className={classes.root}>
        
      <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ width: '90vw' }}>
      <Typography
          component="div"
          style={{
            backgroundColor: 'rgba(0, 0, 12, 0.5)',
            height: 'auto',
            marginTop: '8%',
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '800px',
            margin: '0 auto',

          }}
        >
        <Typography variant="h3" color="primary" component="h1">
          Lista de viagens
        </Typography>
        <Grid container spacing={4}>
          {filteredAndOrderedList.map((trip) => {
            return (
              <Grid item xs={6}>
                <Paper className={classes.paper} variant="outlined" square>
                  <p style={{ fontWeight: 'bold', color: 'black' }}>
                    {trip.name}
                  </p>
                  <div
                    style={{
                      textAlign: 'center'
                    }}
                  >
                    <div>
                      <p>Duração: {trip.durationInDays} dias</p>
                      <p>Planeta: {trip.planet}</p>

                      <p>Data: {trip.date}</p>
                    </div>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => goToTripApplicationForm(trip.id)}
                      >
                        Ir
                      </Button>
                    </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        </Typography>
        </Container>
      </ThemeProvider>
      
    </div>
  );
};

export default Trips;
