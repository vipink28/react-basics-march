import { useState } from "react";

function Counter() {
  const [count, setCount] = useState({ num: 0 });
  const [countNum, setCountNum] = useState(0);

  const increment = () => {
    //update the state using the value
    setCountNum(countNum + 1);
    //update the state in object
    setCount((prev) => (
        { num: prev.num + 1 }
        ));
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count.num}</h2>
      <h2>{countNum}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;
