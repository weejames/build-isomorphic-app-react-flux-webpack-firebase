import React from 'react';
import Channel from '../components/Channel.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class ChannelList extends React.Component {

    constructor (props) {
        super(props);
        ChatStore.getChannels();
    }

    static getStores () {
        return [ChatStore];
    }

    static getPropsFromStores () {
        return ChatStore.getState();
    }

    render () {
        if (!this.props.channels) {
            return (
                <Card style={{
                        flexGrow: 1
                    }}>
                    <CircularProgress
                        mode="indeterminate"
                        style={{
                            paddingBottom: 20,
                            paddingTop: 20,
                            margin: '0 auto',
                            display: 'block',
                            width: 60
                        }} />
                </Card>
            );
        }

        var channelNodes = _(this.props.channels)
            .keys()
            .map( (key) => {
                let channel = this.props.channels[key];
                return (
                    <Channel channel={channel} />
                )
        })
        .value();

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
