import React, { useState, useEffect } from 'react';
import './Stars.css'
import { createRange } from '../../../util/util'

const Stars = props => { 

  const [initStars, setInitStars] = useState(createRange(props.lowestValue, props.starNumber));

  useEffect( () => {
    setInitStars(createRange(props.lowestValue, props.starNumber))
    //eslint-disable-next-line
  }, [props.starNumber]);

  return(
    <React.Fragment>
      {!props.gameNotOver.current 
        ? (
        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <h2>{props.remainingNumbers.length ? 'You Lost' : 'You Won'}</h2>
          <button onClick={() => props.setGameVersion(Math.random())}>Play Again?</button>
        </div>
        ) : (
          <>
            {initStars.map(v => <div key={v} className="star star-item"></div>)}
          </>
        )}
    </React.Fragment>
  )
}

export default Stars;
