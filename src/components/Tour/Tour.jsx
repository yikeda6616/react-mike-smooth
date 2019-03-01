import React from 'react';
import SectionLabel from '../SectionLabel/SectionLabel';
import Content from '../Content/Content';
import Background from '../Background/Background';
import image from '../../img/tour-bg.jpg';

const Tour = () => {
  return (
    <div className='Tour content-area'>
      <Background image={image} />
      <SectionLabel heading='Tour' />
      <Content page='Tour' />
    </div>
  );
};

export default Tour;
