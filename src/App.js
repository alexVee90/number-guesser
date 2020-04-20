import React, { useState } from 'react';

import Game from './components/game/Game'

function App() {

  const [gameVersion, setGameVersion] = useState(1);
  
  return (
   <div className="app">
     <Game setGameVersion={setGameVersion} key={gameVersion} />
   </div>
  );
}

export default App;
