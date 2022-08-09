import React from 'react';

const CounterView = ({ counter, onDecrementClick, onIncrementClick }) => (
    React.createElement("div", null,
        React.createElement("div", { id: "rootCounter" }, counter.toString()),
        React.createElement("button", { onClick: onDecrementClick }, "-"),
        React.createElement("button", { onClick: onIncrementClick }, "+"))
);

export default CounterView;