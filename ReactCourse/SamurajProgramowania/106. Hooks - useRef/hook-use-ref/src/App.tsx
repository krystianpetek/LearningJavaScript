import React, { createRef, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const textInputRef = useRef<HTMLInputElement>(null);
  const numberInputRef = createRef<HTMLInputElement>();

  const focusOnInput = () => textInputRef.current!.focus();
  const increaseCounter = () => setCounter(counter + 1);

  console.log(textInputRef); // reference on full lifetime
  console.log(numberInputRef); // reference signed on every rerender component

  useEffect(() => {
    focusOnInput()
  }, [])

  return (
    <div className="App">
      <input type="text" ref={textInputRef}></input>
      <input type="number" ref={numberInputRef}></input>
      <button onClick={focusOnInput}>Set focus on input</button>
      <button onClick={increaseCounter}>Rerender component</button>
    </div >
  );
}

export default App;