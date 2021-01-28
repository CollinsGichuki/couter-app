import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl : 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3', 'tag4']
  };

  render() { 
    return(
    <div>
      <img src={this.state.imageUrl} alt=""/>
      <span className={ this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <ul>
        //The List needs a key for every item 
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
      </ul>
      </div>
      );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //If count = 0, we use a warning badge else, primary badge
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {count} = this.state;
    //If count is 0, show the string Zero else, show the number
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;