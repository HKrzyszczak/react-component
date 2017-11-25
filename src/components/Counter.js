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

    componentDidMount() {
        console.log('jestem w didMount')
    }

    componentWillMount() {
        console.log('jestem w willMount');
    }

    componentWillUnmount() {
        console.log('jestem w unMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
       if (nextProps.name === 'Warszawa'); {
           return false;
        }
        if (nextState.count === 1000) {
           return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps) {
        this.props.name;
        nextProps.name;

    }

    render() {
        return <div>
            <h3>Mój stan: {this.state.count}</h3>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }
}

export default Counter