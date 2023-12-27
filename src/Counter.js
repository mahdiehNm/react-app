import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const increaseHandler = () => setCounter((prevCounter) => prevCounter + 1);
  const increase3 = () => setCounter((prevCounter) => prevCounter + 3);
  const stopHandler = () => setCounter(0);
  const showHandler = () => setIsShow(true);
  const hideHandler = () => setIsShow(false);

  return (
    <>
      <button onClick={showHandler}>show</button>
      <button onClick={hideHandler}>hide</button>

      {isShow && (
        <div>
          <h1>Counter</h1>
          <p>{counter}</p>

          <button onClick={increaseHandler}>increase</button>
          <button onClick={increase3}>increase3</button>
          <button onClick={stopHandler}>stop</button>
        </div>
      )}
    </>
  );
};

export default Counter;
