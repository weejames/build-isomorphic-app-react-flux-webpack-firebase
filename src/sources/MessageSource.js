import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

//new Firebase('https://react-chat-tutorial.firebaseio.com/messages');

let MessageSource = {

    sendMessage: {
        remote(state) {
            return new Promise( (resolve, reject) => {
                if (!firebaseRef) return resolve();

                firebaseRef.push({
                    message: state.message,
                    date: new Date().toUTCString(),
                    author: state.user.google.displayName,
                    userId: state.user.uid,
                    profilePic: state.user.google.profileImageURL
                });

                resolve();
            });
        },
        success: Actions.messageSendSuccess,
        error: Actions.messageSendFailed
    },

    getMessages: {
        remote (state) {
            let channelKey;

            if (firebaseRef) {
                firebaseRef.off();
            }

            if (state.selectedChannel) {
                channelKey = state.selectedChannel.key;
            };

            firebaseRef = new Firebase('https://react-chat-tutorial.firebaseio.com/messages/' + channelKey);

            return new Promise((resolve, reject) => {
                firebaseRef.once('value', (dataSnapshot) => {
                    var messages = dataSnapshot.val();
                    resolve(messages);

                    firebaseRef.on('child_added', (message) => {
                        let msgVal = message.val();
                        msgVal.key = message.key();
                        Actions.messageReceived(msgVal);
                    })
                });
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed
    }

};

export default MessageSource;
