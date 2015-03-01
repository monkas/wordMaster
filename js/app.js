/* creation du module toutes nos fonctions et direcitves doivnet etre stocke dans un module, a chaque nouvelle application prendre le reflexe de creer un module */
/* le deuxieme argument est un tableau qui permet d'injecter des dependances */
var app = angular.module('wordApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'views/home.html'})
        .otherwise({redirectTo: '/'})
});