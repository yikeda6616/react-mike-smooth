import React from 'react';
import Background from '../Background/Background';
import Animation from '../Animation/Animation';

import image from '../../img/home-bg.jpg';

const Home = () => (
  <div className='Home'>
    <Background image={image} />
    <Animation />
  </div>
);

export default Home;
