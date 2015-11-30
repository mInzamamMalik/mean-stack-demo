/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp")
    .controller("homeController", function ($scope, $http) {

        $scope.getRand = function () {

            $http.get("http://localhost:3000/random/" + $scope.min + "/" + $scope.max)
                .then(function (response) {
                    $scope.result = response;
                });

        }
    });