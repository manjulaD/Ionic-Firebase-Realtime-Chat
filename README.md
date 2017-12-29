# Ionic-Firebase-Realtime-Chat
Real time chat use case using Ionic 1 and Firebase real time database
1. Setting up Firebase is documented in Firebase_setup.docx
2. Ionic 1 Chat screen is adapted from https://codepen.io/ethanneff/pen/yymYRR
3.To use configured real time Firebase db, using following code parts,
  1. setup DB name and Firebase Referance
     var dbName = "messages";
     if (!firebase.apps.length) {
       firebase.initializeApp({});
     }
     var ref = firebase.database().ref(dbName);
    
  2. Push data to DB
   ref.push(
        {
          userId: $scope.userId,
          text: $scope.data.message,
          time: d,

        }
      );
  3. Listen to Reastime DB data changes and get data to iterate through
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
