import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './main.scss';

import { signin as x } from './actions/userActions.js';

const App = (props) => (
  <div className="">
    {props.children}
  </div>
);

render(<App />, document.getElementById('root'));
