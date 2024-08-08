import { useContext } from 'react';
import { AppContext } from '../App';

export const End = () => {
    const { currAttempt, correctWord, guessedWord, end} = useContext(AppContext);

    return (
        <div className="ending">
            {end || guessedWord ? (
                <div>
                    <h2>{correctWord.toUpperCase()}</h2>
                    <h3>You solved it in {currAttempt.attempt} tries!</h3>
                </div>
            ) :
            (
                <div>
                    <h2>{correctWord}</h2>
                    <h3>Better luck next time!</h3>
                </div>
            )}
        </div>
    );
}

export default End;