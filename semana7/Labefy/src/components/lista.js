import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters";

export default class ListaPlaylistPage extends React.Component {
  state = {
    playlists: []
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlists: response.data.result.list });
      console.log(response.data.result.list)
    } catch (error) {
      console.log(error);
    }
  };

  deletePlaylist = (id) => {
    if (window.confirm("Deseja mesmo deletar a playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          axiosConfig
        )
        .then((res) => {
          this.getAllPlaylists();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const mapPlaylists = this.state.playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>{playlist.name}</p>
          <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</button>
        </div>
      );
    });
    return (
      <div>
        <h2>Lista de Playlists</h2>
        {mapPlaylists}
      </div>
    );
  }
}
