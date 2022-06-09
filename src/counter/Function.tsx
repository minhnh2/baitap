import { useState } from "react";

function Counter1() {
  const [number, setNumber] = useState<number>(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const handleDecrease = () => {
    setNumber(number - 1);
  };
  const handleReset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>Fuctional Component</h1>
      <h2>{number}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
export default Counter1;
