import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Joao'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/200'}
        />
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/seed/picsum/200/300'}
          fotoPost={'https://picsum.photos/200/200'}
        />
      </div>
    );
  }
}

export default App;
