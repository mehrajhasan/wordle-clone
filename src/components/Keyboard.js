import { useContext, useCallback, useEffect, useMemo } from 'react';
import { AppContext } from '../App';
import Key from './Key';

export const Keyboard = () => {
    const keys1 = useMemo(() => ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], []);
    const keys2 = useMemo(() => ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], []);
    const keys3 = useMemo(() => ['Z', 'X', 'C', 'V', 'B', 'N', 'M'], []);

    const { onEnter, onDelete, onSelectLetter, disabledLetters, correctLetters, almostLetters } = useContext(AppContext);

    const handleKeys = useCallback((event) => {
        if(event.key === "Enter"){
            onEnter();
        } else if(event.key === "Backspace"){
            onDelete();
        } else{
            keys1.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key)
                }
                
            })
            keys2.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key)
                }
            })
            keys3.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelectLetter(key)
                }
            })
        }
    }, [onEnter, onDelete, onSelectLetter, keys1, keys2, keys3]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeys)

        return () => {
            document.removeEventListener("keydown", handleKeys);
        }
    }, [handleKeys])

    return (
        <div className="keyboard" onKeyDown={handleKeys}>
            <div className="row1">
                {keys1.map((key) => {
                   return <Key keyVal={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)} almost={almostLetters.includes(key)}/>
                })}
            </div>

            <div className="row2">
                {keys2.map((key) => {
                   return <Key keyVal={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)} almost={almostLetters.includes(key)}/>
                })}
            </div>

            <div className="row3">
            <Key keyVal={"ENTER"} bigKey/>
                {keys3.map((key) => {
                   return <Key keyVal={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)} almost={almostLetters.includes(key)}/>
                })}
            <Key keyVal={"DEL"} bigKey/>
            </div>
        </div>

    )
}

export default Keyboard;