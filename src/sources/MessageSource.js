import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

//new Firebase('https://react-chat-tutorial.firebaseio.com/messages');

let MessageSource = {

    getMessages: {
        remote (state) {
            let channelKey;

            if (firebaseRef) {
                firebaseRef.off();
            }

            if (state.selectedChannel) {
                channelKey = state.selectedChannel.key;
            };

            firebaseRef = new Firebase('https://react-chat-tutorial.firebaseio.com/messages' + channelKey);

            return new Promise((resolve, reject) => {
                firebaseRef.once('value', (dataSnapshot) => {
                    var messages = dataSnapshot.val();
                    resolve(messages);
                });
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed
    }

};

export default MessageSource;
