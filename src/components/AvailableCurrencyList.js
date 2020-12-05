import React from 'react';
import https from '../services/https.js';
import { useEffect } from 'react';
import { useState } from "react";
import AvailableCurrency from './AvailableCurrency';

const AvailableCurrencyList = (props) => {
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  console.log('I am here');
  useEffect(() => {
    console.log('pares');
    https.get().then((res) => {
      setAvailableCurrencies(res.data);
    });
  }, [props]);
  return (
    <ul>
      {
        availableCurrencies.map((availableCurency) => {
          console.log('fd', availableCurency);
          return (
            <AvailableCurrency key={availableCurency.value} currency={availableCurency} />
          );
        })
      }
    </ul>
  );
}

export default AvailableCurrencyList;
