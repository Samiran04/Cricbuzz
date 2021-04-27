class Scoring {
    constructor(matchName, actionBox, submitButton, currBat, currTeam){
        this.matchName = matchName;
        this.actionBox = actionBox;
        this.submitButton = submitButton;
        this.currBat = currBat;
        this.currTeam = currTeam;

        this.socket = io.connect('http://localhost:5000');

        this.check();
    }

        check(){

            let self = this;

            this.socket.on('connect', function(){
                console.log('connection established using sockets...!');
    
                self.socket.emit('join_room', {
                    roomName: self.matchName
                });
            })

            $('#submit-button').click(function(){
                
                let v = document.getElementById('action-box');

                self.socket.emit('scoring', {
                    matchName: self.matchName,
                    currBat: self.currBat,
                    currTeam: self.currTeam,
                    action: v.value
                });
            });
        }
}