import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const onIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const onDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  return (
    <div className="App">
      <FontAwesomeIcon icon={faMinusCircle} onClick={onDecrement} />
      <span className="spacing">{count} </span>
      <FontAwesomeIcon icon={faPlusCircle} onClick={onIncrement} />
    </div>
  );
}
