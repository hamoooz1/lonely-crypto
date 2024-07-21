import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(response => {
        setCoin(response.data);
      }).catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  if (!coin) return <div>Loading...</div>;

  return (
    <div>
      <h1>{coin.name}</h1>
      <p>{coin.description?.en}</p>
      <p>Current Price: ${coin.market_data?.current_price?.usd}</p>
    </div>
  );
};

export default CoinDetail;
