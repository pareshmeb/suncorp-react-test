import React from 'react';
import DispencedCurrency from './DispencedCurrency';

const DispencedCurrencyList = (props) => {
    return (
        <ul>
            {
                props.currencies.map((currency) => {
                    console.log('fd', currency);
                    return (
                        <DispencedCurrency key={currency.value} currency={currency} />
                    );
                })
            }
        </ul>
    );
}

export default DispencedCurrencyList;
