import React from 'react';

const AvailableCurrency = (props) => {
  return (
    <ul>
      <li className="Available-currency"><div>Currency: {props.currency.value}</div><div>Available: {props.currency.available}</div></li>
    </ul>
  );
}

export default AvailableCurrency;
