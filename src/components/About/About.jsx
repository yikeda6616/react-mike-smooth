import React from 'react';
import SectionLabel from '../SectionLabel/SectionLabel';
import Content from '../Content/Content';
import Background from '../Background/Background';
import image from '../../img/about-bg.jpg';

const About = () => {
  return (
    <div className='About content-area'>
      <Background image={image} />
      <SectionLabel heading='About' />
      <Content page='About' />
    </div>
  );
};

export default About;
