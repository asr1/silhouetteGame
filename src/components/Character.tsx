import { useEffect, useState } from 'react';
import '../App.css';
import ICharacter from '../interfaces/ICharacter';

function Character(props: ICharacter) {


    const [isRevealed, setIsRevealed ] = useState(false);

    useEffect( () => {
        setIsRevealed(!!props.revealed)
    }, [props.revealed]);

  return (
    <>
        <img className={isRevealed ? '' : 'unrevealed'} src={"images/" + props.src} alt={isRevealed ? props.name : ""}></img>
    </>
  );
}

export default Character;
