import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, ActionButtons } from './styles';
import Card from '../CardPerfil/Card';

const Tela = (props) => {
  const [perfis, setPerfis] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPerfis();
  }, []);

  const getPerfis = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elber-sousa/person`
      )
      .then((response) => {
        setPerfis(response.data.profile);
        setIsLoading(false);
      });
  };

  const choosePerson = (bananinha) => {
    if (bananinha) {
      const body = {
        id: perfis.id,
        choice: true
      };

      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elber-sousa/choose-person`,
          body
        )
        .then((response) => {
          console.log(response.data);
        });
      getPerfis();
      setIsLoading(true);
    } else {
      const body = {
        id: perfis.id,
        choice: false
      };
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elber-sousa/choose-person`,
          body
        )
        .then((response) => {
          console.log(response.data);
        });
      getPerfis();
      setIsLoading(true);
    }
  };

  const clearMatches = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elber-sousa/clear`
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Container>
      <h3>AstroMatch v1.0.2</h3>
      {isLoading ? (
        <div className="c-loader" />
      ) : (
        <Card
          key={perfis?.id}
          photo={perfis?.photo}
          name={perfis?.name}
          age={perfis?.age}
          bio={perfis?.bio}
        />
      )}
      <button onClick={() => clearMatches()} className="nes-btn is-warning">
        Resetar
      </button>
      <ActionButtons>
        <button onClick={() => choosePerson(false)} className="nes-btn is-error">
          <h3 className="nes-icon close is-medium color-red"></h3>
        </button>
        <button onClick={() => choosePerson(true)} className="nes-btn is-success">
          <h3 className="nes-icon is-medium like"></h3>
        </button>
      </ActionButtons>
      
    </Container>
    
  );
};

export default Tela;
