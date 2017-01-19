import angular from 'angular';
import ngRoute from 'angular-route';

import { EldestFilter } from './eldest.filter';
import { UsersController } from './users.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { DtaGravatar } from './dta-gravatar/dta-gravatar.component'
import { DtaUser } from './dta-user/dta-user.component'

export default angular.module('user', [
    ngRoute
])

.controller('UsersController', UsersController)

.controller('UserController', UserController)

.filter('eldest', EldestFilter)

.service('UserService', UserService)

.component('dtaGravatar', DtaGravatar)

.component('dtaUser', DtaUser)



.config(function($routeProvider) {

    $routeProvider
        .when('/users', {
            template: require('./view/users.html'),
            controller: 'UsersController',
            controllerAs: 'ctrl'
        })
        .when('/user/:id?', {
            template: require('./view/user.html'),
            controller: 'UserController',
            controllerAs: 'ctrl'
        })
})

.directive("major", function() {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ngModelCtrl) {
            ngModelCtrl.$validators.major = function(value) {
                return value >= 18;
            };
        }
    }
})



.name;