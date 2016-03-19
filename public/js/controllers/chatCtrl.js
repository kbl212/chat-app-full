var app = angular.module('chat-app-full');

app.controller('chatCtrl', function($scope, chatService){
    $scope.currMessage = "";
    $scope.allChatMessages = [];
    $scope.socket = io.connect();
    $scope.userName = "Anonymous";
   // $scope.fullChatDiv = "";
    
    $scope.messageSubmit = function() {
        console.log($scope.currMessage);
        var submitObj = {
            message: $scope.currMessage,
            userName: $scope.userName
        }
        $scope.socket.emit('send message', submitObj);
        $scope.currMessage = "";
    }
    
    $scope.socket.on('new message', function(data) {
       
        var today = new Date();
        var amPM = "AM";
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        if (hours > 11) {
            hours -= 12;
            amPM = "PM";
        }
        if (hours < 10)
            hours = "0" + hours;
        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;

        var currTime = hours + ":" + minutes + ":" + seconds + " " + amPM;
        
        var messageObj = {
            userName: data.userName,
            content: data.message,
            time: currTime
        }
        $scope.allChatMessages.push(messageObj);
        $scope.$apply();
        console.log("FullChat:  ", $scope.allChatMessages);
    });
})