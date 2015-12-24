/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp")
    .controller("encryptPasswordController", function ($scope, $http, $interval) {



        ///////////////linear progress code start/////////////////
        var self = $scope, j = 0, counter = 0;
        self.mode = 'query';
        self.activated = true;
        self.determinateValue = 0;
        self.determinateValue2 = 100;
        self.modes = [0];
        /**
         * Turn off or on the 5 themed loaders
         */
        self.toggleActivation = function () {
            if (!self.activated) self.modes = [0];

            if (self.activated) {
                j = counter = 0;
                self.determinateValue = 0;
                self.determinateValue2 = 100;
            }
        };
        $interval(function () {
            self.determinateValue += 1;
            self.determinateValue2 += 1.5;
            if (self.determinateValue > 100) self.determinateValue = 30;
            if (self.determinateValue2 > 100) self.determinateValue2 = 30;
            // Incrementally start animation the five (5) Indeterminate,
            // themed progress circular bars
            if ((j < 2) && !self.modes[j] && self.activated) {
                self.modes[j] = (j == 0) ? 'buffer' : 'query';
            }
            if (counter++ % 4 == 0) j++;
            // Show the indicator in the "Used within Containers" after 200ms delay
            if (j == 2) self.contained = "indeterminate";
        }, 100, 0, true);
        $interval(function () {
            self.mode = (self.mode == 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
        ///////////////linear progress code end/////////////////


        $scope.passwordToHash = function () {
            $scope.result = undefined;
            $scope.showError = false;

            $scope.showProgress = true;

            $scope.toggleActivation();


            $http({
                method: "post",
                //url: "http://localhost:3000/encrypt-app/v1/passwordToHash",
                url: "http://inzi.herokuapp.com/encrypt-app/v1/passwordToHash",
                data: {
                    dataToBeEncrypted: $scope.dataToBeEncrypted,
                    rounds: $scope.rounds
                }
            }).then(
                function (response) {
                    console.log("response", response);
                    $scope.result = response;
                    setTimeout(function () {
                        $scope.showProgress = false;
                    }, 300);

                },
                function (err) {

                    console.log("error", err);

                    $scope.showError = "unable to get response";
                    setTimeout(function () {
                        $scope.showProgress = false;
                    }, 300);

                    setTimeout(function () {
                        $scope.showError = false;
                    }, 5000)

                });
        };


        $scope.varifyHash = function () {
            $scope.result = undefined;
            $scope.showError = false;

            $scope.showProgress = true;

            $scope.toggleActivation();


            $http({
                method: "post",
                url: "http://localhost:3000/encrypt-app/v1/varifyHash",
                //url: "http://inzi.herokuapp.com/encrypt-app/v1/varifyHash",
                data: {
                    hashedPassword: $scope.hashedPassword,
                    realPassword: $scope.realPassword
                }
            }).then(
                function (response) {
                    console.log("response", response);
                    $scope.result = response;
                    setTimeout(function () {
                        $scope.showProgress = false;
                    }, 300);
                },
                function (err) {
                    console.log("error", err);
                    $scope.result = {data: {res: ""}}; // i don't know why i need this
                    $scope.result.data.res = "unable to get response, Check internet connection";
                    setTimeout(function () {
                        $scope.showProgress = false;
                    }, 300);
                });
        };

    
    });