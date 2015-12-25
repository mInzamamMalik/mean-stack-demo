/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp")
    .controller("loginController" , function($scope,$http){

//start///// toggle "signup and login" form code

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
        };
//end///// toggle "signup and login" form code

        $scope.doSignup = function(){

            $http({
                method : "post",
                url : "http://localhost:3000/teacher-student-app/v1/signup",
                //url: "http://inzi.herokuapp.com/teacher-student-app/v1/signup",
                data :  $scope.signupInfo

            }).then(function(err,res){

            });

        };

///encrypt-app/v1/signup

    });























