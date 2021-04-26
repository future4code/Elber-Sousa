import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Match } from './styles';

function Matches() {
  const [listMatches, setListMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elber-sousa/matches`
      )
      .then((response) => {
        setListMatches(response.data.matches);
        setIsLoading(false);
      });
  };
  return (
    <Container>
      <h3> Matches</h3>
      {isLoading ? (
        <div className="c-loader" />
      ) : (
        listMatches.map((match) => (
          <Match>
            <img src={match.photo} />
            <span>{match.name}</span>
          </Match>
        ))
      )}
    </Container>
  );
}

export default Matches;
