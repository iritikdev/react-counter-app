import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1">
            <span className={this.UpdateClasses()}>{this.handleCount()}</span>
          </div>

          <div className="col">
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <ion-icon name="add-outline"></ion-icon>
            </button>

            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              <ion-icon name="remove-sharp"></ion-icon>
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      </>
    );
  }

  UpdateClasses() {
    let classes = "badge mx-2 bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
  handleCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }
}
export default Counter;
