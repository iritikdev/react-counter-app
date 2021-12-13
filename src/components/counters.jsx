import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onDelete, onReset, onIncrement, counters } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id} // 'key' is used internally by React
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
