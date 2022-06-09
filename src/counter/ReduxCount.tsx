import { useAppDispatch, useAppSelector } from "../store/Hook";
import { increase, decrease } from "../count/counterSlide";

const ReduxCount = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(decrease());
  };
  return (
    <div>
      <h1>Using Redux</h1>
      <button onClick={handleIncrease}>+</button>
      <h2>{count}</h2>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default ReduxCount;
