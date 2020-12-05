import React from 'react';

const DispencedCurrency = (props) => {
    return (
        <ul>
            <li className="Available-currency"><div>Currency: {props.currency.value}</div><div>No of Notes: {props.currency.noOfNotes}</div></li>
        </ul>
    );
}

export default DispencedCurrency;
