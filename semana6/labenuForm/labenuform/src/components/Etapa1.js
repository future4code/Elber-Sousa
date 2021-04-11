import React from 'react';
export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <h2>1. Qual o seu nome?</h2>
        <input></input>
        <h2>2. Qual sua idade?</h2>
        <input></input>
        <h2>3. Qual seu email?</h2>
        <input></input>
        <h2>4. Qual a sua escolaridade?</h2>
        <select>
          <option value="1">Ensino médio incompleto</option>
          <option value="2">Ensino médio completo</option>
        </select>
      </div>
    );
  }
}
