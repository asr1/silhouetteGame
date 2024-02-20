import '../App.css';
import ICharacter from '../interfaces/ICharacter';

function Character(props: ICharacter) {
    let isRevealed = false;
  return (
    <>
        <img className={isRevealed ? '' : 'unrevealed'} src={"images/" + props.src} alt={isRevealed ? props.name : ""}></img>
        {/* {props.names.map( name => (
            <li>{name}</li>
        ))} */}
    </>
  );
}

export default Character;
