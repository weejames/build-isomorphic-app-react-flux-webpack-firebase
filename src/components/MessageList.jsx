import React from 'react';
import Message from '../components/Message.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import _ from 'lodash';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class MessageList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            messages: {}
        };
        ChatStore.getMessages();
    }

    static getStores () {
        return [ChatStore];
    }

    static getPropsFromStores () {
        return ChatStore.getState();
    }

    render () {
        let messageNodes = null;

        if (this.props.messages) {
            messageNodes = _.values(this.props.messages).map( (message) => {
                return (
                    <Message message={message.message} />
                )
            });
        }

        return (
            <Card style={{
                    flexGrow: 2,
                    marginLeft: 30
                }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }

}

export default MessageList;
