import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default class App extends React.Component {
  state = {
    Etapa: 1
  };

  renderizaF = () => {
    switch (this.state.Etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return 'nothing';
    }
  };

  prox = () => {
    this.setState({ Etapa: this.state.Etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaF()}
        <br />
        {this.state.Etapa !== 4 && (
          <button onClick={this.prox}>Próxima etapa</button>
        )}
      </div>
    );
  }
}
