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

  render() {
    return (
      <div>
        {
          //Get the individual counter and map it to the Counter Component
          this.state.counters.map((counter) => (
            <Counter
              //Props
              //Key is used internally by React and hence why we have to create id prop
              key={counter.id}
              onDelete={this.handleDelete}
              value={counter.value}
              id={counter.id}
            ></Counter>
          ))
        }
      </div>
    );
  }
}

export default Counters;
