import React from 'react';

const Sidebar = () => (
  <div className='Sidebar'>
    <div className='Sidebar__social'>
      <ul>
        <li>
          <a href='http://google.com/'>FB</a>
        </li>
        <li>
          <a href='http://google.com/'>TW</a>
        </li>
        <li>
          <a href='http://google.com/'>IG</a>
        </li>
        <li>
          <a href='mailto:mike-smooth-info@mikesmooth.com' target='_self'>
            <i className='far fa-envelope' />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
