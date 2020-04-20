import React from 'react';
import './PlainNumber.css'

const styles = { 
  margin: '0.5rem'
}

const PlainNumber = props => {
  const { num, addToSelected, selectedNumbers, usedNumbers, gameNotOver } = props
  const handleClick = e => { 
    addToSelected({num: props.num});
  }

  return(
    <button onClick={handleClick} 
      style={ styles } 
      className={`btn ${
        usedNumbers.includes(num) 
        ? 'used' 
        : selectedNumbers.includes(num)
          ? 'in-use'
          : 'available'
      }`}
      disabled={usedNumbers.includes(num) || !gameNotOver.current}
    >
      {props.num}
    </button>
  )
}

export default PlainNumber;