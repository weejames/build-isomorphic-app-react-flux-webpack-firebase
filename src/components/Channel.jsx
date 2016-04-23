import React from 'react';
import {ListItem} from 'material-ui/List';
import Actions from '../actions';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Channel extends React.Component {

    constructor (props) {
        super(props);
    }

    onClick () {
        Actions.channelOpened(this.props.channel);
    }

    render () {
        let style = {};

        if (this.props.channel.selected) {
            style.backgroundColor = '#2196F3';
        }


        return (
            <ListItem
                style={style}
                primaryText={this.props.channel.name}
                onClick={this.onClick.bind(this)}
                leftIcon={<CommunicationChatBubble />}
                key={this.props.channel.key} />
        );
    }

}

export default Channel;
