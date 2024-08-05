import './App.css';

import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [board,setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <Header/>
      <AppContext.Provider value={{board,setBoard}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
