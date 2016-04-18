import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('./styles/main.scss');

injectTapEventPlugin();

ReactDOM.render( <App />, document.getElementById('container'));
