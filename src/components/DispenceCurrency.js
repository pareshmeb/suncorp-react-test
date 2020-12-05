import React from 'react';
import https from '../services/https.js';
import { useState } from "react";
import DispenceCurrencyList from './DispencedCurrencyList';

const DispenceCurrency = (props) => {
    const [amount, setAmount] = useState(5);
    const [error, setError] = useState('');
    const [dispatchCurrency, setDispatchCurrency] = useState([]);

    const updateAmount = ev => {
        setAmount(ev.target.value);
    };
    const getCurrency = () => {
        setError('');
        setDispatchCurrency([]);
        https.put(`/dispence/${amount}`).then((res) => {
            if (!res.data.success) {
                setError(res.data.error)
            } else {
                setDispatchCurrency(res.data.dispenceMonies);
            }
            props.setRenderAvailable();
        });
    }
    return (
        <ul>
            <input type="text" value={amount} onChange={updateAmount} />
            <button onClick={getCurrency}>Get Currency</button>
            <div className="error Available-currency">{error}</div>
            <DispenceCurrencyList currencies={dispatchCurrency} />
        </ul>
    );
}

export default DispenceCurrency;
