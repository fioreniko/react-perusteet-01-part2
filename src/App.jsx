//https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittely
//Tilan vieminen alikomponenttiin

import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
