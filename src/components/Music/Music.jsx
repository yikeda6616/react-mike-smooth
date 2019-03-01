import React from 'react';
import SectionLabel from '../SectionLabel/SectionLabel';
import Content from '../Content/Content';
import Background from '../Background/Background';
import image from '../../img/music-bg.jpg';

const Music = props => {
  return (
    <div className='Music content-area'>
      <Background image={image} />
      <SectionLabel heading='Music' />
      <Content
        page='Music'
        audios={props.audios}
        onAudioClicked={props.onAudioClicked}
      />
    </div>
  );
};

export default Music;
