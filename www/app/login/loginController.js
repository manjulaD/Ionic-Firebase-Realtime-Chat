angular.module('login', [])
    .controller('LoginCtrl', function ($scope, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function () {
           
            var valid = false;
            if ($scope.data.username) {
                valid = true;
                localStorage.setItem("userName", $scope.data.username);
            }
           
            if (valid) {
                $state.go('chats');
            } else {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            }


        }
    })
