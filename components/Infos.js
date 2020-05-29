import React from 'react';
import {withLoading} from '../hocs/withLoading';

const Infos = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>
      <img
        alt="me"
        src='https://upload.wikimedia.org/wikipedia/commons/7/7c/SWCE_-_EuroVader_%28801375039%29.jpg'
        style={{ margin: '0 auto' }}
      />
    </li>
    <li>My name: Darth Vader</li>
    <li>My username: vader.darth</li>
    <li>My login: darkside@gmail.com</li>
  </ul>
);

export default withLoading(Infos);