import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

function XoxGameComponent(){
  const [games, setGames] = useState([]);
  const [mark, setMark] = useState("X");
  const [message, setMessage] = useState("");
  const [isGameFinish, setIsGameFinsih] = useState(false);
  const [gameMove, setGameMove] = useState([]);

  useEffect( () => {
    newGame();
  }, []);

  const newGame = () => {
    setGames([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);
    setIsGameFinsih(false);
    setMark("X");
    setMessage("Order of Moves : " + mark);
    setGameMove([]);
  }

  const markGame = (index) => {
    if(!isGameFinish){
      const newGames = [...games];
      if(newGames[index] === ""){
        newGames[index] = mark;
        setGames(newGames);
        setGameMove((val) => [...val, newGames])
        let e = isMoveFinish(newGames);
        if(e){
          setMessage("Game draw");
          setIsGameFinsih(true);
          return;
        }

        let r = isGameOver(newGames);
        if(r){
          setMessage(mark + " Won the Game.");
          setIsGameFinsih(true);
          return;
        }

        mark === "X" ? setMark("O") : setMark("X");
        setMessage("Order of Moves : " + mark);
      }
    }
  }

  function isMoveFinish(newGames){
    for (let i = 0; i< newGames.length; i++){
      const element = newGames[i];
      if(element === ""){
        return false;
      }
    }
    return true;
  }

  const isGameOver = (newGames) => {
    if(newGames[0] !== "" &&
    newGames[0] === newGames[1] &&
    newGames[1] === newGames[2]){
      return true;
    }

    if(newGames[3] !== "" &&
    newGames[3] === newGames[4] &&
    newGames[4] === newGames[5]){
      return true;
    }

    if(newGames[6] !== "" &&
    newGames[6] === newGames[7] &&
    newGames[7] === newGames[8]){
      return true;
    }

    if(newGames[0] !== "" &&
    newGames[0] === newGames[3] &&
    newGames[3] === newGames[6]){
      return true;
    }

    if(newGames[1] !== "" &&
    newGames[1] === newGames[4] &&
    newGames[4] === newGames[7]){
      return true;
    }

    if(newGames[2] !== "" &&
    newGames[2] === newGames[5] &&
    newGames[5] === newGames[8]){
      return true;
    }

    if(newGames[0] !== "" &&
    newGames[0] === newGames[4] &&
    newGames[4] === newGames[8]){
      return true;
    }

    if(newGames[2] !== "" &&
    newGames[2] === newGames[4] &&
    newGames[4] === newGames[6]){
      return true;
    }
    return false;
  }

  const setThatGameMobe = (game) => {
    setGames(game);
  }

  return(
    <>
    <div className='container text-center'>
      <h1>XOX Game</h1>
      <h2 className='alert alert-warning'>
        {message}
      </h2>
      <button onClick={newGame} className='btn btn-outline-primary w-100'>
        New Game
      </button>
      <div className='row mt-2'>
        {games.map((game, index) => (
          <div className='col-md-4 box' 
          key={index}
          onClick={() => markGame(index)}>
            {game}
          </div>
        ))}
      </div>
      <hr/>
      {gameMove.map((game, index) => (
        <button onClick={()=> setThatGameMobe(game)} className='text-center btn btn-primary mx-2' key={index}>{index + 1}. Hamle</button>
      ))}
    </div>
    
      
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <XoxGameComponent />
);


reportWebVitals();
