import React from 'react';
import Card from 'material-ui/Card';
import trim from 'trim';
import Firebase from 'firebase';

class MessageBox extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            message: ''
        };

        this.firebaseRef = new Firebase('https://react-chat-tutorial.firebaseio.com/messages');
    }

    onChange (event) {
        this.setState({
            message: trim(event.target.value)
        });
    }

    onKeyUp (event) {
        if (event.keyCode == 13 && trim(event.target.value) !== '') {
            event.preventDefault();

            this.firebaseRef.push({
                message: this.state.message
            })

            this.setState({
                message: ''
            });
        }
    }

    render () {
        return (
            <Card style={{
                    maxWidth: 1200,
                    margin: '30px auto',
                    padding: 30
                }}>
                <textarea
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    style={{
                        width: '100%',
                        borderColor: '#D0D0D0',
                        resize: 'none',
                        borderRadius: 3,
                        minHeight: 50,
                        color: '#555',
                        fontSize: 14,
                        outline: 'auto 0px'
                    }} />
            </Card>
        );
    }

}

export default MessageBox;
