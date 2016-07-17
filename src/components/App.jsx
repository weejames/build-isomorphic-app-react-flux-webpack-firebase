import React from 'react';
import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import RouteHandler from 'react-router';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class App extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    render () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="Chatter Master!" />
                    <RouteHandler />
                </div>
            </MuiThemeProvider>
        );
    }

}

export default App;
