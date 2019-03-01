import React from 'react';

const Track = props => {
  console.log(props);
  return (
    <div className='Track' onClick={() => props.onAudioClicked(props.audio)}>
      <div className='Track__image'>
        <img src={props.audio['img']} alt={props.audio['img']} />
      </div>
      <div className='Track__detail'>
        <h3>{props.audio['name']}</h3>
        <h4>{props.audio['year']}</h4>
        <h4>Produce: {props.audio['artist']}</h4>
      </div>
    </div>
  );
};

export default Track;
