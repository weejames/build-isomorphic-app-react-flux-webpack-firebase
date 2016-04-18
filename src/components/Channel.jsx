import React from 'react';
import {ListItem} from 'material-ui/List';


class Channel extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ListItem
                primaryText={this.props.title} />
        );
    }

}

export default Channel;
