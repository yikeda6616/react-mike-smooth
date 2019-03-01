import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../Home/Home';
import About from '../About/About';
import Tour from '../Tour/Tour';
import Music from '../Music/Music';
import Contact from '../Contact/Contact';

const page404 = () => <div>Not Found</div>;

const Main = props => {
  const audios = props.audios;
  const onAudioClicked = props.onAudioClicked;
  const currentkey = props.location.pathname.split('/')[1] || '';
  const duration = 300;

  return (
    <TransitionGroup>
      <CSSTransition
        key={currentkey}
        classNames='fade'
        timeout={{ enter: duration, exit: duration }}
      >
        <Switch location={props.location}>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Tour' exact component={Tour} />
          <Route
            path='/Music'
            exact
            render={props => (
              <Music
                audios={audios}
                onAudioClicked={onAudioClicked}
                isAuthed={true}
              />
            )}
          />
          <Route path='/Contact' exact component={Contact} />
          <Route exact component={page404} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Main);
