import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo_white.png';
const style = { backgroundImage: `url(${logo})` };

const RoutedContent = () => (
  <header className='Header'>
    <Link to='/'>
      <h1 className='Header__logo' style={style}>
        Mike Smooth
      </h1>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Tour'>Tour</Link>
        </li>
        <li>
          <Link to='/Music'>Music</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default RoutedContent;
