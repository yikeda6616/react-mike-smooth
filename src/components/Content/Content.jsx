import React from 'react';
import Track from '../Track/Track';

const Content = props => {
  console.log(props.audios);
  // Show different contents according to props.page
  switch (props.page) {
    case 'About':
      return (
        <div className='Content Content-About'>
          <h3>Mike Smooth</h3>
          <h4>Biography</h4>
          <p>
            From the first note that he has ever written to the smallest detail
            in his live shows; the commitment toward everything that his fans
            get to experience is seemingly endless. As one of the very few
            artists to break through with a signature sound it has been the
            distinctive ‘bounce’ that Mike Smooth has perfected since.
          </p>
          <h3>Literally From A to Z</h3>
          <p>
            While this was the start of a whirlwind adventure within the global
            electronic music scene Mike’s true trademarks have always been a
            sense of serenity and his ever-present modesty.
          </p>
        </div>
      );

    case 'Tour':
      return (
        <div className='Content Content-Tour'>
          <div>
            <h3>Amsterdam, Netherlands</h3>
            <h4>March 01 2019</h4>
            <p>
              Don't Let Daddy Know
              <br />
              <a href='http://google.com/'>Get Tickets</a>
            </p>
          </div>
          <div>
            <h3>Bielefeld, Germany</h3>
            <h4>April 21 2019</h4>
            <p>
              Road to WCD Tour
              <br />
              <a href='http://google.com/'>Get Tickets</a>
            </p>
          </div>
          <div>
            <h3>Plainfeld, Austria</h3>
            <h4>July 05 2019</h4>
            <p>
              Electric Love
              <br />
              <a href='http://google.com/'>Get Tickets</a>
            </p>
          </div>
        </div>
      );

    case 'Music':
      return (
        <div className='Content Content-Music'>
          <Track
            audio={props.audios[0]}
            onAudioClicked={props.onAudioClicked}
          />
          <Track
            audio={props.audios[1]}
            onAudioClicked={props.onAudioClicked}
          />
          <Track
            audio={props.audios[2]}
            onAudioClicked={props.onAudioClicked}
          />
        </div>
      );

    case 'Contact':
      return (
        <div className='Content Content-Contact'>
          <h3>Sorted Management</h3>
          <p>
            <a href='mailto:mike@sortedmanagement.com' target='_self'>
              <i className='fas fa-envelope' />
              mike
              <i className='fas fa-at' />
              sortedmanagament.com
            </a>
          </p>
          <h3>Press Inquiries</h3>
          <p>
            <a href='mailto:press@mikereccords.com' target='_self'>
              <i className='fas fa-envelope' />
              mike
              <i className='fas fa-at' />
              mikereccords.com
            </a>
          </p>
          <h3>Bookings(Worldwide)</h3>
          <p>
            <a href='mailto:press@mikereccords.com' target='_self'>
              <i className='fas fa-envelope' />
              bookings
              <i className='fas fa-at' />
              mikeagency.com
            </a>
          </p>
        </div>
      );

    default:
      return (
        <div className='Content'>
          <p>content not found</p>
        </div>
      );
  }
};

export default Content;
