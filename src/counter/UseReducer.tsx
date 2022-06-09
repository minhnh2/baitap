import { useReducer } from "react";

const innitState: number = 0;
const INCREASE_ACTION: string = "increase";
const DECREASE_ACTION: string = "decrease";
const reducer = (state, action) => {
  switch (action) {
    case INCREASE_ACTION:
      return state + 1;
    case DECREASE_ACTION:
      return state - 1;
    default:
      throw new Error("error");
  }
};
const UseReducerCount = () => {
  const [count, dispatch] = useReducer(reducer, innitState);
  const handleIncrease = () => {
    dispatch(INCREASE_ACTION);
  };
  const handleDecrease = () => {
    dispatch(DECREASE_ACTION);
  };
  return (
    <div>
      <h1>Using useReducer</h1>
      <button onClick={handleIncrease}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default UseReducerCount;
