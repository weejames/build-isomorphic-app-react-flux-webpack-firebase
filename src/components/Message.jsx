import React from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


class Message extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ListItem
                leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/210489?v=3&s=40" />}
                primaryText={this.props.message}
                rightIcon={<CommunicationChatBubble />} />
        );
    }

}

export default Message;
