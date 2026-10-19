import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./nameSlice";

export default function Counter() {
  const c = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {c}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
