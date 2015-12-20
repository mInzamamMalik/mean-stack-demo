/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp")
    .controller("homeController", function ($scope, $http, $interval) {


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



        $scope.getRand = function () {
            $scope.result = undefined;

            $scope.showProgress = true;

            $scope.toggleActivation();
            $http.get("https://inzi.herokuapp.com/random/" + $scope.min + "/" + $scope.max)
                .then(
                function (response) {
                    $scope.result = response;
                    setTimeout(function () {
                        $scope.showProgress = false;
                    }, 300);

                },
                function (response) {

                    console.log(response);

                    $scope.showError = true;
                    setTimeout(function () {
                        $scope.showProgress = false;
                    }, 300);

                    setTimeout(function () {
                        $scope.showError = false;
                    }, 3000)

                });

        };



    });
