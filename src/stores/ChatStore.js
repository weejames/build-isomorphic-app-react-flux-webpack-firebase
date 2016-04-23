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
            channels: null,
            messages: null,
            messagesLoading: true,
            user: null
        }
    }

    @bind(Actions.channelOpened)
    channelOpened (selectedChannel) {
        _(this.state.channels)
            .values()
            .each( (channel) => {
                channel.selected = false;
            });

        selectedChannel.selected = true;
        this.setState({
            selectedChannel,
            channels: this.state.channels
        });

        setTimeout(this.getInstance().getMessages, 10);
    }

    @bind(Actions.sendMessage)
    sendMessage (message) {
        this.state.message = message;
        setTimeout(this.getInstance().sendMessage, 10);
    }

    @bind(Actions.messagesLoading)
    messagesLoading () {
        this.setState({
            messagesLoading: true
        })
    }

    @bind(Actions.messageReceived)
    messageReceived (message) {
        if (this.state.messages[message.key]) {
            return;
        }

        this.state.messages[message.key] = message;

        this.setState({
            messages: this.state.messages
        });
    }

    @bind(Actions.messagesReceived)
    receivedMessages (messages) {
        if (!messages) {
            this.setState({
                messagesLoading: false
            });
            return;
        }

        _(messages)
            .keys()
            .each( (key) => {
                messages[key].key = key;
            });

        this.setState({
            messages,
            messagesLoading: false
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
