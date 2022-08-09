import React, { PureComponent } from 'react';
import CounterView from './CounterView';

export default class Counter extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            counter: 0,
        };
        this.handleDecrementClick = () => {
            this.setState(({ counter }) => ({ counter: counter - 1 }));
        };
        this.handleIncrementClick = () => {
            this.setState(({ counter }) => ({ counter: counter + 1 }));
        };
    }
    render() {
        const { counter } = this.state;
        return (React.createElement(CounterView, { counter: counter, onDecrementClick: this.handleDecrementClick, onIncrementClick: this.handleIncrementClick }));
    }
}
