import { useContext } from 'react';
import { AppContext } from '../App';

export const Key = ({keyVal, bigKey, correct, almost, disabled}) => {
    const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

    const selectLetter = () => {
        if(keyVal === "ENTER"){
            onEnter();
        } else if(keyVal === "DEL"){
            onDelete();
        }   else{
            onSelectLetter(keyVal);
        }   
    };

    return (
        <div className="key" id={bigKey ? "big": correct ? "correct" : almost ? "almost" : disabled && "disabled"} onClick={selectLetter}>
            {keyVal}
        </div>
    );
}

export default Key;