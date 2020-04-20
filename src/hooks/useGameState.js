import { useState, useRef } from 'react';

import { createRange, randomNumber } from '../util/util';

export default () => { 
  const [starNumber, setStarNumber] = useState(randomNumber());
  const [count, setCount] = useState(10);
  const [initNumbers] = useState(createRange(1, 9));
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [usedNumbers, setUsedNumbers] = useState([]);
  const [remainingNumbers, setRemainingNumbers] = useState(createRange(1, 9));

  const addToSelected = num => { 
    setSelectedNumbers([...selectedNumbers, num.num]);
    setRemainingNumbers(remainingNumbers.filter(n => n !== num.num ));
  } 

  const lowestValue = Math.max(Math.min(...initNumbers), Math.min(...remainingNumbers));
  const highestValue = Math.max(...remainingNumbers);
  const gameNotOver = useRef(true);

  const checkIfOver = () => { 

    gameNotOver.current = remainingNumbers.length && count > 0 ? true : false;

    if(selectedNumbers.reduce((a, b) => a + b, 0) === starNumber) {
      setUsedNumbers([...usedNumbers, ...selectedNumbers]);
      setSelectedNumbers([]);
      let newStarNumber = null; 

      while(
        (newStarNumber === null || newStarNumber < lowestValue || !remainingNumbers.includes(newStarNumber) || newStarNumber > highestValue) 
        && gameNotOver.current
        ) {
        newStarNumber = randomNumber(); 
      }
      setStarNumber(newStarNumber);
    }

    return gameNotOver;
  }

  return {
    count, setCount, gameNotOver, remainingNumbers, selectedNumbers, setUsedNumbers, usedNumbers, setSelectedNumbers, lowestValue, highestValue, setStarNumber, addToSelected, starNumber, initNumbers, checkIfOver
  }
}
  