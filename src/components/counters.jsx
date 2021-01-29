import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    //Array of Counters
    //Use the id to uniquely identify the counters
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleIncrement = (counter) => {
    //We can't change components directly, hence the cloning
    //Clone the state couters
    const counters = [...this.state.counters];
    //Get the index of the counter to be increased
    const index = counters.indexOf(counter);
    //Clone the counter to be increased
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    //We don't update the state completely
    //To remove an element from the counters array, we make a new array without the deleted array
    //call setState on the component and let React do
    //Use the filter method to get all the counters except the one with the id
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log("CounterId of tag selected", counterId);
    //Override the counters property with the counters const
    this.setState({ counters: counters });
  };

  handleReset = () => {
    //Get the existing counters and reset each counter's value to 0
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-2">
          Reset
        </button>
        {
          //Get the individual counter and map it to the Counter Component
          this.state.counters.map((counter) => (
            <Counter
              //Props
              //Key is used internally by React and hence why we have to create id prop
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              //Counter object provides us with the desired props, value and id
              counter={counter}
            ></Counter>
          ))
        }
      </div>
    );
  }
}

export default Counters;
