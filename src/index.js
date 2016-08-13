import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import TakeoffTableEditor from './TakeoffTableEditor/TakeoffTableEditor.js';

import '../node_modules/semantic-ui-css/semantic.css';

ReactDOM.render(
  <Provider store={store}>
    <TakeoffTableEditor />
  </Provider>,
  document.getElementById('root')
);
