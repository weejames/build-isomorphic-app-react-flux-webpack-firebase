import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Actions from '../actions';

class Login extends React.Component {

    onClick () {
        Actions.login();
    }

    render () {
        return (
            <Card style={{
                    maxWidth: 800,
                    margin: '30px auto',
                    padding: 50
                }}>
                <CardText style={{
                        textAlign: 'center'
                    }}>
                    Get chatting!  Login with your Google Account.
                </CardText>
                <RaisedButton
                    style={{
                        display: 'block'
                    }}
                    onClick={this.onClick.bind(this)} label="Login" />
            </Card>
        );
    }

}

export default Login;
