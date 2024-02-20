import { useCallback, useEffect, useState } from 'react';
import '../App.css';
import ICharacter from '../interfaces/ICharacter';
import { CheckNames } from '../util/util';
import Character from './Character';
import InputBox from './InputBox';

interface Props {
  chars: ICharacter[]
}

function CharacterScreen(props: Props) {
 
  const [, updateState] = useState({});
  const forceUpdate = useCallback( ()=> updateState({}), []);

  const processGuess = function(guess: string) {
    const namesToReveal = CheckNames(guess, props.chars);
    props.chars.forEach( (char) => {
      // No need to compare case, we've already normalized
      if(namesToReveal.includes(char.name)) {
        char.revealed = true;
        forceUpdate();
        alert(char.name);
      }
    });
  } 
 
  return (
    <>
    {props.chars.map( (char, idx) => (
      <Character key={idx} name={char.name} names={char.names} x={char.x} y={char.y} z={char.z} src={char.src} revealed={char.revealed} />
      ))}
    <InputBox handleGuess={processGuess}></InputBox>
    </>
  );
}

export default CharacterScreen;
