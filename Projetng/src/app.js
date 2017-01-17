import angular from 'angular';

import { exclamationFilter } from './exclamation.filter'
import { eldestAgeFilter } from './eldest.filter'
import { eldestFilter } from './eldest.filter'
import { MyFirstController } from './firstController.controller'
import { UserService } from './userService.service'

angular.module('app', [])

.controller('MyFirstController', MyFirstController)

.filter('exclam', exclamationFilter)
    .filter('doyen', eldestAgeFilter)
    .filter('eldest', eldestFilter)

.service('SuperService', UserService)

.value('Version', '2.0.0')

.run(function() {
    console.log('PizzaYOLO !');
})