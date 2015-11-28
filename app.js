/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp",["material","ui.Router"])

.config(function($urlRouterProvider, $stateProvider){

        $urlRouterProvider.otherwise("/");


        $stateProvider

            .state("home",{
                Url : "/",
                templateUrl : "views/home/home.html",
                controller : homeController
            })
            .state("contact",{
                Url : "/contact",
                templateUrl : "views/contact/contact.html",
                controller : contactController
            })
            .state("about",{
                Url : "/contact",
                templateUrl : "views/contact/contact.html",
                controller : contactController
            })
            .state("login",{
                Url : "/login",
                templateUrl : "views/login/login.html",
                controller : loginController
            })


    });