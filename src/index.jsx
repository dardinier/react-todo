import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import WiredApp from './containers/WiredApp';
import '../assets/scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <WiredApp />
  </Provider>,
  document.getElementById('root'),
);
