import React from 'react';
import MessageList from '../components/MessageList.jsx';
import ChannelList from '../components/ChannelList.jsx';
import MessageBox from '../components/MessageBox.jsx';
import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import Login from '../components/Login.jsx';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

@connectToStores
class App extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    static getStores () {
        return [ChatStore];
    }

    static getPropsFromStores () {
        return ChatStore.getState();
    }

    render () {
        var view = (
            <Login />
        );

        if (this.props.user) {
            view = (
                <div>
                    <div style={{
                            display: 'flex',
                            flexFlow: 'row wrap',
                            maxWidth: 1200,
                            width: '100%',
                            margin: '30px auto 30px'
                        }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            );
        }

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="Chatter Master!" />
                    {view}
                </div>
            </MuiThemeProvider>
        );
    }

}

export default App;
