import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  // constructor() {
  //   //We need to call the constructor of the super class(Compnent) in tderived class before accessing this(Couter)
  //   super();
  //   //Functions in JavaScript are objects and hence methods can be called on them
  //   //bind will return a new instance of handleIncrement which will have this referencing the current Counter object
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  //Using an arrow function achieves the same with less effort.
  //Arrow functions don't bind this keyword
  handleIncrement = () => {
     //setState tells React we are updating the state 
     //and it will figure out which part of the state we are updating and bring the DOM in sync with the virtual sync
     this.setState({count: this.state.count +1})
  }

  render() { 
    return(
    <div>
      <span 
      className={ this.getClassBadges()}>{this.formatCount()}</span>
      <button 
      onClick = {this.handleIncrement}
      className="btn btn-secondary btn-sm">Increment</button>
      </div>
      );
  }

  getClassBadges() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes
  }

  formatCount() {
    const {count} = this.state;
    //If count is 0, show the string Zero else, show the number
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;