//https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittely
//Tapahtumankäsittely

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  );
};
export default App;
