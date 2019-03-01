import React from 'react';
import SectionLabel from '../SectionLabel/SectionLabel';
import Content from '../Content/Content';
import Background from '../Background/Background';
import image from '../../img/contact-bg.jpg';

const Contact = () => {
  return (
    <div className='Contact content-area'>
      <Background image={image} />
      <SectionLabel heading='Contact' />
      <Content page='Contact' />
    </div>
  );
};

export default Contact;
