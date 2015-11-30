/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp")
    .controller("loginController" , function($scope){

        $scope.loginFormShow = true;
        $scope.signupFormShow = false;

        $scope.toggleSignupLoginFormShow = function () {

            if ($scope.loginFormShow) {
                $scope.loginFormShow = false;
                $scope.signupFormShow = true;
            } else {
                $scope.loginFormShow = true;
                $scope.signupFormShow = false;
            }

        }


    });