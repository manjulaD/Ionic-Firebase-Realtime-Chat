angular.module('chats', [])
  .controller('chatsCtrl', function ($scope, $timeout, $stateParams, $ionicScrollDelegate, $ionicPopup) {

    var dbName = "messages";
    $scope.userId = localStorage.getItem('userName');




    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
    var ref = firebase.database().ref(dbName);
    $scope.hideTime = true;
    $scope.data = {};
    $scope.myId = '12345';
    $scope.messages = [];

    $scope.userName = localStorage.getItem('userName');
    $scope.sendMessage = function () {
     
      var d = new Date();
      d = d.toLocaleTimeString().replace(/:\d+ /, ' ');


      ref.push(
        {
          userId: $scope.userId,
          text: $scope.data.message,
          time: d,

        }
      );

      $ionicScrollDelegate.scrollBottom(true);


      delete $scope.data.message;
    };

    $scope.pushMessage = function (_userId, _text, _time) {
      $scope.messages.push({
        userId: _userId,
        text: _text,
        time: _time,

      });
    };

   
    ref.on('value', data => {
      $scope.messages = [];
     
      data.forEach(data => {
        var id = '12345';
        var myidValue = $scope.userId;
        var guestId = data.val().userId;
        if (myidValue === guestId) {
          id = '54321';
        };
        $scope.pushMessage(id, (data.val().text), JSON.stringify(data.val().time));
      });
      if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        $scope.$apply(function () { $scope.messages = $scope.messages; });
        $ionicScrollDelegate.scrollBottom(true);
      }

    });
    $scope.inputUp = function () {
      if (isIOS) $scope.data.keyboardHeight = 216;
      $timeout(function () {
        $ionicScrollDelegate.scrollBottom(true);
      }, 300);

    };

    $scope.inputDown = function () {
      if (isIOS) $scope.data.keyboardHeight = 0;
      $ionicScrollDelegate.resize();
    };




  })

  