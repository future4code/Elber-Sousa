import React from "react";
import CreatePlaylistPage from "./components/criarPlaylist";
import ListaPlaylistPage from "./components/lista";
import "./App.css";

export default class App extends React.Component {
  state = {
    page: "criarPlaylist"
  };

  changePage = () => {
    if (this.state.page === "criarPlaylist") {
      this.setState({ page: "listaPlaylists" });
    } else if (this.state.page === "listaPlaylists") {
      this.setState({ page: "criarPlaylist" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "criarPlaylist":
        return <CreatePlaylistPage />;
      case "listaPlaylists":
        return <ListaPlaylistPage />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div className="App">
        <h1 class= 'header'>Header</h1>
        <button onClick={this.changePage}>Lista de Playlists</button>
        {this.renderPage()}
        <h1 class= 'footer'>Footer</h1>
      </div>
      
    );
  }
}
