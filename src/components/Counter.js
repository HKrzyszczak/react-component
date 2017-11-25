import React from 'react'


class Counter extends React.Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.state = {
            count: 0
        };
        this.handleClick = function () {
            alert('Klik!!!');
        }
    }

    render() {
        return <div>
            <h3>Mój stan: {this.state.count}</h3>
            <button onClick={this.handleClick}>Guziczek</button>
        </div>
    }
}

export default Counter