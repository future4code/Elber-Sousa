import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../parameters";

export default class CreatePlaylistPage extends React.Component {
  state = {
    name: "",
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.name,
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        console.log(res);
        alert("A playlist foi criada com sucesso!");
        this.setState({ name: ""});
      })
      .catch((err) => {
        alert("ERROOOOO");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Criar playlist</h2>
        <input
          onChange={this.handleName}
          value={this.state.name}
          placeholder="Nome"
        />
        <button onClick={this.criarPlaylist}>Enviar</button>
      </div>
    );
  }
}
