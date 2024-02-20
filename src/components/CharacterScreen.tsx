import '../App.css';
import ICharacter from '../interfaces/ICharacter';
import Character from './Character';
import InputBox from './InputBox';

interface Props {
  chars: ICharacter[]
}

function CharacterScreen(props: Props) {
  return (
    <>
    {props.chars.map( (char, idx) => (
      <Character key={idx} name={char.name} names={char.names} x={char.x} y={char.y} z={char.z} src={char.src} />
      ))}
    <InputBox></InputBox>
    </>
  );
}

export default CharacterScreen;
