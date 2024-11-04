//https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittely
//Tapahtumankäsittelijän vieminen alikomponenttiin

import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue); // print the new value to console
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;
