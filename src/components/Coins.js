import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
      },
    }).then(response => {
      setCoins(response.data);
    }).catch(error => {
      console.error('Error fetching data: ', error);
    });
  }, []);

  return (
    <div>
      <h1>Cryptocurrencies</h1>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            <Link to={`/coins/${coin.id}`}>{coin.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coins;
