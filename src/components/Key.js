import { useContext } from 'react';
import { AppContext } from '../App';

export const Key = ({keyVal, bigKey}) => {
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
        <div className="key" id={bigKey && "big"} onClick={selectLetter}>
            {keyVal}
        </div>
    );
}

export default Key;