import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import RoutedContent from './components/RoutedContent/RoutedContent';

import artwork1 from './img/around_the_world.jpg';
import artwork2 from './img/artwork2.png';
import artwork3 from './img/artwork4.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      audios: [
        {
          id: 1,
          name: 'Around The World Remix',
          src: './audio/around_the_world.mp3',
          year: 2019,
          img: artwork1,
          artist: 'Atlus Plug'
        },
        {
          id: 2,
          name: 'Calling / Laktos / Mine',
          src: './audio/calling_laktos_mine.mp3',
          year: 2015,
          img: artwork2,
          artist: 'Sebastian Ingrosso'
        },
        {
          id: 3,
          name: 'More Than You Know',
          src: './audio/more_than_you_know.mp3',
          year: 2013,
          img: artwork3,
          artist: 'Axwell Λ Ingrosso'
        }
      ],
      selectedAudio: {
        id: 1,
        name: 'Around The World Remix',
        src: './audio/around_the_world.mp3',
        img: './img/around_the_world.jpg'
      }
    };
  }

  onAudioClickedHandler = audio => {
    this.setState({ selectedAudio: audio });
  };

  render() {
    return (
      <Router>
        <div className='wrapper'>
          <RoutedContent />
          <Main
            audios={this.state.audios}
            onAudioClicked={this.onAudioClickedHandler}
          />
          <Sidebar />
          <Footer selectedAudio={this.state.selectedAudio} />
        </div>
      </Router>
    );
  }
}

export default App;
