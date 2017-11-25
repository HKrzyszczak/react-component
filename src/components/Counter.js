import React from 'react'


class Counter extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        if (this.state.count < 10) {
            this.setState({
                count: this.state.count + 1
            });
        }
    };

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    };

    render() {
        return <div>
            <h3>Mój stan: {this.state.count}</h3>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }
}

export default Counter