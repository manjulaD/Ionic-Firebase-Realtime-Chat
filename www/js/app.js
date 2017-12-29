// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase','login','chats'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        
          .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl',
            cache: false
          })
          .state('chats', {
            url: '/chats',
            cache: false,
            templateUrl: 'app/chats/chat.html',
            controller: 'chatsCtrl',

             

          });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');


  //    var config = {
  //   apiKey: "AIzaSyDntzHCeZv1DnAQvnm6mLBWlohw3YuNTDw",
  //   authDomain: "ionicfirebasechat-a9af1.firebaseapp.com",
  //   databaseURL: "https://ionicfirebasechat-a9af1.firebaseio.com",
  //   projectId: "ionicfirebasechat-a9af1",
  //   storageBucket: "ionicfirebasechat-a9af1.appspot.com",
  //   messagingSenderId: "644000590200"
  // };
  //     firebase.initializeApp(config);
    });

