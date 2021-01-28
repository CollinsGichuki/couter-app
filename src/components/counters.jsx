import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        //Array of Counters
        //Use the id to uniquely identify the counters
        counters: [
            {id:0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4}
        ]
     }
    render() { 
        return (
            <div> {
                //Get the individual counter and map it to the Counter Component
                this.state.counters.map(counter => (
                    <Counter  key={counter.id} value={counter.value}>,
                    <h4>Counter {counter.id}</h4>
                    </Counter>
                ))}
        </div> );
    }
}
 
export default Counters;