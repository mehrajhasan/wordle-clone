import { useContext, useEffect } from 'react';
import { AppContext } from '../App';


export const Letter = ({letterPos, attemptVal}) => {
    const { board, correctWord, currAttempt, setDisabledLetters, setCorrectLetters, setAlmostLetters } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt>attemptVal && (correct ? "correct" : almost ? "almost" : "wrong");
    const delay = letterPos * .2;

    useEffect(() => {
        if(letter !== "" && !correct && !almost){
            setDisabledLetters((prev) => [...prev, letter]);
        }
        if(letter !== "" && correct && !almost){
            setCorrectLetters((prev) => [...prev, letter]);
        }
        if(letter !== "" && !correct && almost){
            setAlmostLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);


    return (
        <div className={`letter ${letterState}`} style={{ animationDelay: `${delay}s` }}>
            {letter}
        </div>
    );
}

export default Letter;