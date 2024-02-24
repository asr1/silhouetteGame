import { ChangeEvent, FormEvent, useState } from 'react';
import '../App.css';

interface Props {
    handleGuess: (guess: string)=> void;
    handleGiveUp: ()=> void;
}

function InputBox(props: Props) {
    const [text, setText] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.handleGuess(text);
        setText("");
    }

  return (
    <div className="InputBoxHolder">
        <h3>Guess a character</h3>
            <button onClick={props.handleGiveUp}>Give Up</button>
        <form onSubmit={handleSubmit}>
            <input type="Text" value={text} onChange={handleChange}></input>
            <input type="submit" value="Guess"/>
        </form>
    </div>
  );
}

export default InputBox;
