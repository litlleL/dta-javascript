import angular from 'angular';
import ngRoute from 'angular-route';

import bootstrap_rating from 'angular-ui-bootstrap/src/rating';

import UserModule from './user';

import SoundBox from './sound-box';

import { ExclamationFilter } from './exclamation.filter';

angular.module('app', [
        ngRoute,
        UserModule,
        SoundBox,
        bootstrap_rating
    ])
    .filter('exclamation', ExclamationFilter)
    .value('Version', '1.0.0')

.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<h1>Bienvenue {{ ctrl.name }}</h1>',
            controller: function() {
                this.name = 'Livio';
            },
            controllerAs: 'ctrl'
        })
        .when('/about', {
            template: '<h1>About</h1>'
        })
        .when('/soundbox', {
            template: `<sound-form></sound-form><sound-box></sound-box>`
        })
        .otherwise({
            templateUrl: 'notFound.html',
        });

})

.run(function() {
    console.log('PizzaYOLO !');
})