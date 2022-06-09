import { Component } from "react";

type CounterProps = {
  message?: string;
};
type CounterState = {
  count: number;
};
export class Counter2 extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  };

  handleIncrease = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  handleDecrease = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1> class Component</h1>
        <button onClick={this.handleDecrease}>-</button>
        {this.props.message} {this.state.count}
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}
