import React from 'react';
import { useState } from 'react';
import HoppingImage from './HoppingImage';

const Home = () => {
  const [followLonely, setFollowLonely] = useState(true);
  const divStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(/jungleHome.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (

    followLonely ? (
    <div style={divStyle}>
      <HoppingImage />
    </div>
    ) : (
      <h1>ds</h1>
    )
  );
};

export default Home;
