var app = angular.module('chat-app-full');

app.controller('chatCtrl', function($scope, chatService){
    $scope.currMessage = "";
    $scope.fullChat = "";
    $scope.socket = io.connect();
    
    $scope.messageSubmit = function() {
        alert('$scope.currMessage = ', $scope.currMessage);
        console.log($scope.currMessage);
        $scope.socket.emit('send message', $scope.currMessage);
        $scope.currMessage = "";
    }
    
    $scope.socket.on('new message', function(data) {
        console.log("this...is...DATA!: ", data);
        $scope.fullChat += data + "\n";
        console.log("what", $scope.fullChat);
    });
})