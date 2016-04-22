import React from 'react';
import {ListItem} from 'material-ui/List';


class Channel extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        let style = {};

        if (this.props.channel.selected) {
            style.backgroundColor = '#2196F3';
        }


        return (
            <ListItem
                style={style}
                primaryText={this.props.channel.name} />
        );
    }

}

export default Channel;
