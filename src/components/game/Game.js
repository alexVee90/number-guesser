import React, { useEffect } from 'react';
import './Game.css'

import Stars from './stars/Stars';
import NumberList from './numberList/NumberList';

import useGameState from '../../hooks/useGameState';

const Game = props => { 

  const {
    count, setCount, gameNotOver, remainingNumbers, selectedNumbers, usedNumbers, lowestValue, addToSelected, starNumber, initNumbers, checkIfOver
  } = useGameState();

  useEffect(() => {
    const timer = setTimeout( () => {
      count > 0 && setCount(count - 1); 
    }, 1000)

    checkIfOver();

    return () => clearTimeout(timer);
  });

  return(
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>Pick a number, or more numbers that add up to the number of stars</h2>
      <div className="Game-showcase">
        <div className="left game-item">
          <Stars 
            lowestValue={lowestValue} 
            starNumber={starNumber} 
            gameNotOver={gameNotOver}
            remainingNumbers={remainingNumbers}
            setGameVersion={props.setGameVersion}
          />
        </div>
        <div className="right game-item">
          <NumberList 
            addToSelected={addToSelected} 
            usedNumbers={usedNumbers} 
            selectedNumbers={selectedNumbers} 
            initNumbers={initNumbers} 
            gameNotOver={gameNotOver}
          />
        </div>
      </div >
      <div className="timer">
        <p style={{ textAlign: 'center' }}>Time Left: {count} seconds</p>
      </div>
    </React.Fragment>
  )
}

export default Game;