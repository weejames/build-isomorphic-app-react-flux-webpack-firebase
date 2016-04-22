import alt from '../alt';
import Firebase from 'firebase';

class Actions {

    constructor () {
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed'
        );
    }

    login (args) {
        return (dispatch) => {
            var firebaseRef = new Firebase('https://react-chat-tutorial.firebaseio.com');
            firebaseRef.authWithOAuthPopup('google', (error, user) => {
                if (error) {
                    console.warn('Login failed');
                    return;
                }

                dispatch(user);
            });
        }
    }

}

export default alt.createActions(Actions);
