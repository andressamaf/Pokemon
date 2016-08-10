var app = angular.module("pokemon", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/inicio");

    $stateProvider
        .state('inicio', {
            url: "/inicio"
            , templateUrl: "Vistas/Inicio.html"
            , controller: "InicioCtrl"
        })
        .state('pokemon', {
            url: "/pokemon"
            , templateUrl: "Vistas/Pokemon.html"
            , controller: "PokemonCtrl"
        })
});