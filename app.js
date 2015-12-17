/**
 * Created by malikasinger on 11/28/2015.
 */
angular.module("myApp", ['ngMaterial', 'ui.router', 'ngMdIcons'])

    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $urlRouterProvider.otherwise("/");


        $stateProvider.state("home", {
            url: "/",
            templateUrl: "views/home/home.html",
            controller: "homeController"
        })
            .state("contact", {
                url: "/contact",
                templateUrl: "views/contact/contact.html",
                controller: "contactController"
            })
            .state("about", {
                url: "/contact",
                templateUrl: "views/about/about.html",
                controller: "aboutController"
            })
            .state("login", {
                url: "/login",
                templateUrl: "views/login/login.html",
                controller: "loginController"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "views/signup/signup.html",
                controller: "signupController"
            })
            .state("encryptPassword", {
                url: "/encryptPassword",
                templateUrl: "views/encryptPassword/encryptPassword.html",
                controller: "encryptPasswordController"
            });

        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('blue')
            .dark();
        $mdThemingProvider.theme('forms', 'default')
            .primaryPalette('yellow')
            .dark();

    });