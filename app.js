/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp",['ngMaterial','ui.router'])

.config(function( $stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");


        $stateProvider.state("home",{
                url : "/",
                templateUrl : "views/home/home.html",
                controller : "homeController"
            })
            .state("contact",{
                url : "/contact",
                templateUrl : "views/contact/contact.html",
                controller : "contactController"
            })
            .state("about",{
                url : "/contact",
                templateUrl : "views/about/about.html",
                controller : "aboutController"
            })
            .state("login",{
                url : "/login",
                templateUrl : "views/login/login.html",
                controller : "loginController"
            })


    });