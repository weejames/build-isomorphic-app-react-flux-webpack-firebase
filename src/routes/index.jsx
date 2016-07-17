import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import {default as Router, Route, DefaultRoute, hashHistory} from 'react-router';

ReactDOM.render((
    <Route path="/" handler={App} history={hashHistory}>
        <DefaultRoute handler={Chat} />
        <Route path="/chat" handler={Chat} />
        <Route path="/login" handler={Login} />
    </Route>
), document.getElementById('container'));
