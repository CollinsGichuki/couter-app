import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getClassBadges()}>{this.formatCount()}</span>
        <button
          onClick={
            //Use one source of truth
            () => {
              //onIncrement is the name of the event
              //pass the entire counter and let the event handle incrementing the value of the counter
              this.props.onIncrement(this.props.counter);
            }
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm btn-m4"
        >
          Delete
        </button>
      </div>
    );
  }

  getClassBadges() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    //If count is 0, show the string Zero else, show the number
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
