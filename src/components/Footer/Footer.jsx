import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

const Footer = props => {
  return (
    <footer className='Footer'>
      <h4>{props.selectedAudio['name']}</h4>
      <AudioPlayer src={props.selectedAudio['src']} />
    </footer>
  );
};

export default Footer;
