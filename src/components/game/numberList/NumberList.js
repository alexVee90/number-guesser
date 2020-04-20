import React from 'react';
import PlainNumber from './plainNumber/PlainNumber';

const NumberList = props => { 

  return (
    <React.Fragment>
     {props.initNumbers.map(v => (
      <PlainNumber 
        addToSelected={props.addToSelected} 
        key={v} num={v} 
        selectedNumbers={props.selectedNumbers} 
        usedNumbers={props.usedNumbers} 
        gameNotOver={props.gameNotOver}
      />
     ))}
    </React.Fragment>
  )
}

export default NumberList;