import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  };

  componentDidUpdate() {
    localStorage.setItem('novaTarefa', JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    const tarefasEmString = localStorage.getItem('novaTarefa');
    const tarefasEmObjeto = JSON.parse(tarefasEmString);
    this.setState({ tarefas: tarefasEmObjeto });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };
    const copiaDoEstado = [...this.state.tarefas, novaTarefa];
    if (this.state.inputValue === '') {
      alert('Digite um valor válido');
    } else {
      this.setState({ tarefas: copiaDoEstado });
      this.setState({ inputValue: '' });
    }
    localStorage.setItem('novaTarefa', JSON.stringify(novaTarefa));
  };

  selectTarefa = (id) => {
    const tarefasAlteradas = this.state.tarefas.map((tarefas) => {
      if (id === tarefas.id) {
        const novasTarefasAlteradas = {
          ...tarefas,
          completa: !tarefas.completa
        };
        return novasTarefasAlteradas;
      } else {
        return tarefas;
      }
    });
    this.setState({ tarefas: tarefasAlteradas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
