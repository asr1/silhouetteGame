import React from 'react';
import './App.css';
import CharacterScreen from './components/CharacterScreen';
import { sil1Cast } from './casts/casts';

function App() {
  return (
    <div className="App">
      <h1>Silhouette Game</h1>
      <CharacterScreen chars={sil1Cast}></CharacterScreen>
    </div>
  );
}

export default App;
