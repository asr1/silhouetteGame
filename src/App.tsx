import React from 'react';
import './App.css';
import CharacterScreen from './components/CharacterScreen';
import { sil1Cast } from './casts/casts';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='main'>
        <h1>Silhouette Game</h1>
        <CharacterScreen chars={sil1Cast}></CharacterScreen>
      </div>
    </div>
  );
}

export default App;
