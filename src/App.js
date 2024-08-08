import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import End from './components/End';
import { boardDefault, generateWordSet } from './Words';
import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

function App() {
  const [board,setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt:0, letterPos:0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [end, setEnd] = useState({end: false, guessedWord: false});

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });

  }, []);

  const onSelectLetter = (keyVal) => {
    if(currAttempt.letterPos > 4)
      return;

    const currBoard = [...board];
    currBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(currBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos+1});
  };

  const onDelete = () => {
    if(currAttempt.letterPos === 0)
      return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos-1]="";
    setBoard(newBoard)
    setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1})
  };

  const onEnter = () => {
    if(currAttempt.letterPos!==5)
      return;

    let currWord = "";
    for(let x=0;x<5;x++){
      currWord+=board[currAttempt.attempt][x];
    }

    if(wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({ attempt: currAttempt.attempt+1,letterPos:0 })
    } else{
      alert("Not in word list!")
    }

    if(currWord.toUpperCase() === correctWord.toUpperCase()){
      console.log("correct word")
      setEnd({end: true, guessedWord: true});
      return;
    }

    if(currAttempt.attempt===5){
      console.log("u lost")
      setEnd({end: true, guessedWord: false});
      return;
    }

  };

  return (
    <div className="App">
      <Header/>
      <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onDelete,onSelectLetter, correctWord, disabledLetters, setDisabledLetters, correctLetters, setCorrectLetters, almostLetters, setAlmostLetters, end}}>
        <div className="box">
          <Board/>
          {end.end ? <End/> : <Keyboard/>}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
