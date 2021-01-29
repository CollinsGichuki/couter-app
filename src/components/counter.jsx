import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  //Arrow functions don't bind this keyword
  handleIncrement = () => {
    //setState tells React we are updating the state
    //and it will figure out which part of the state we are updating and bring the DOM in sync with the virtual sync
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getClassBadges()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm btn-m4"
        >
          Delete
        </button>
      </div>
    );
  }

  getClassBadges() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    //If count is 0, show the string Zero else, show the number
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
