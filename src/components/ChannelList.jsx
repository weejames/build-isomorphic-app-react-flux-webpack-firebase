import React from 'react';
import Channel from '../components/Channel.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class ChannelList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            channels: [
                'Pop music',
                'Poop music'
            ]
        };
    }

    render () {
        var channelNodes = this.state.channels.map( (channel) => {
            return (
                <Channel title={channel} />
            )
        });

        return (
            <Card style={{
                    flexGrow: 1
                }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }

}

export default ChannelList;
