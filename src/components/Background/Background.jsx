import React from 'react';
// import React, { Component } from 'react';
// import YOUTUBE_API_KEY from '../../config.js';
// import YouTube from 'react-youtube';

const Background = props => {
  const style = { backgroundImage: `url(${props.image})` };
  return (
    <div className='Background' style={style}>
      {/* <Video /> */}
    </div>
  );
};

// class Video extends Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1
//       }
//     };

//     return (
//       <YouTube videoId='ASlv_d8dUQo' opts={opts} onReady={this._onReady} />
//     );
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
export default Background;
