import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);

  function buttonWasClicked() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={buttonWasClicked}>Button</button>
      <h1> { counter } </h1>
    </div>
  );
}

export default App;
