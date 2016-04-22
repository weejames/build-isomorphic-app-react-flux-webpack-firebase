import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
    constructor () {
        this.state = {
            user: null,
            messages: null
        }
    }

    @bind(Actions.messagesReceived)
    receivedMessages (messages) {
        if (!messages) return;

        _(messages)
            .keys()
            .each( (key) => {
                messages[key].key = key;
            });

        this.setState({
            messages
        });

        setTimeout(this.getInstance().getMessages, 1000)
    }

    @bind(Actions.channelsReceived)
    receivedChannels (channels) {
        let selectedChannel;

        _(channels)
            .keys()
            .each( (key, index) => {
                channels[key].key = key;
                if (index === 0) {
                    channels[key].selected = true;
                    selectedChannel = channels[key];
                } else {
                    channels[key].selected = false;
                }
            });

        this.setState({
            channels,
            selectedChannel
        })
    }

    @bind(Actions.login)
    login (user) {
        this.setState({
            user: user
        });
    }
}

export default alt.createStore(ChatStore);
