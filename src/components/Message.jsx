import React from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';

class Message extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ListItem
                leftAvatar={<Avatar src={this.props.message.profilePic} />}
                primaryText={this.props.message.message}
                secondaryText={
                    <p>{this.props.message.author} at {this.props.message.date}</p>
                }
                key={this.props.message.key} />
        );
    }

}

export default Message;
