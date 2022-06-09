import "./styles.css";
import Function from "./counter/Function";
import { Counter2 } from "./counter/Class";
import UseReducerCount from "./counter/UseReducer";
import ReduxCount from "./counter/ReduxCount";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Function />
      <Counter2 />
      <UseReducerCount />
      <ReduxCount />
    </div>
  );
}
