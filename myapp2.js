var apiObj = null;

function StartMeeting(){
    const domain = '40.76.47.33';

    var roomName = 'newRoome_' + (new Date()).getTime();
    
    const options = {
        roomName: roomName,
        width: '100%',
        height: '100%',
        parentNode: document.querySelector('#jitsi-meet-conf-container'),
        userInfo: {
            displayName: 'Bilal Shahzad'
        },
        configOverwrite:{},
        interfaceConfigOverwrite: {},
        onload: function () {
            alert('loaded');
        }
    };
    apiObj = new JitsiMeetExternalAPI(domain, options);

    apiObj.addEventListeners({
        readyToClose: function () {
            alert('going to close');
        }
    });

    apiObj.executeCommand('subject', 'New Room 2');
}

function HangupCall(){
    apiObj.executeCommand('hangup');
}