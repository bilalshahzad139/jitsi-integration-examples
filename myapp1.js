var apiObj = null;

function StartMeeting(){
    const domain = '40.76.47.33';
    const options = {
        roomName: 'JitsiMeetAPIExample123',
        width: 700,
        height: 700,
        parentNode: document.querySelector('#jitsi-meet-conf-container')
    };
    apiObj = new JitsiMeetExternalAPI(domain, options);
}