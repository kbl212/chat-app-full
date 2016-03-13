var app = angular.module('chat-app-full');

app.controller('chatCtrl', function($scope, chatService){
    $scope.currMessage = "";
    $scope.allChatMessages = [];
    $scope.socket = io.connect();
    
    $scope.messageSubmit = function() {
        console.log($scope.currMessage);
        $scope.socket.emit('send message', $scope.currMessage);
        $scope.currMessage = "";
    }
    
    $scope.socket.on('new message', function(data) {
        $scope.allChatMessages.push(data);
        console.log("FullChat:  ", $scope.allChatMessages);
    });
})