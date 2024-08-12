import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increseCounterHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{!show && counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={increseCounterHandler}>Increment Counter By 10</button>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
