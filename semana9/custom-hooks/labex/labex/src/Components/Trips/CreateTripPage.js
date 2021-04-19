import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../services/useForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/elber-sousa";

function CreateTripPage() {
  const [token, setToken] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const { form, onChange, resetForm } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff'
      }
    }
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token);

    console.log(token);
  }, [history]);

  function createTrip() {
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    console.log(axiosConfig);
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${baseUrl}/trips`, body, axiosConfig)
      .then(() => {
        alert("Viagem criada com sucesso!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Faz a chamada da API

    resetForm();
    // Redirecionar de tela

    console.log(form);
    createTrip();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ width: "90vw" }}>
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
            Criar nova viagem:
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "50%",
              height: "80%",
            }}
          >
            <input
              name="name"
              placeholder="Nome da viagem"
              value={form.name}
              type="text"
              pattern="{3,}"
              onChange={handleInputChange}
              required
            />
            <input
              name="planet"
              placeholder="Planeta"
              value={form.planet}
              type="text"
              onChange={handleInputChange}
              required
            />
            <input
              name="date"
              placeholder="Data da viagem"
              value={form.date}
              type="date"
              onChange={handleInputChange}
              required
            />
            <input
              name="description"
              placeholder="Descrição da viagem"
              value={form.description}
              pattern="{10,}"
              type="text"
              onChange={handleInputChange}
              required
            />
            <input
              name="durationInDays"
              placeholder="Duração da viagem em dias"
              value={form.durationInDays}
              type="number"
              onChange={handleInputChange}
              required
            />
            <Button
            variant="contained"
            color="secondary"
            style={{ width: '100%', height: '10%' }}
            type="submit"
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: '100%', height: '10%' }}
            type="reset"
          >
            Limpar campos
          </Button>
          </form>
        </Typography>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default CreateTripPage;