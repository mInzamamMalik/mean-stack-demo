/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp",['ngMaterial','ui.router'])

.config(function( $stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");


        $stateProvider.state("home",{
                Url : "/",
                templateUrl : "views/home/home.html",
                controller : "homeController"
            })
            .state("contact",{
                Url : "/contact",
                templateUrl : "views/contact/contact.html",
                controller : "contactController"
            })
            .state("about",{
                Url : "/contact",
                templateUrl : "views/about/about.html",
                controller : "aboutController"
            })
            .state("login",{
                Url : "/login",
                templateUrl : "views/login/login.html",
                controller : "loginController"
            })


    });