import angular from 'angular';

import { exclamationFilter } from './exclamation.filter'
import { eldestAgeFilter } from './eldest.filter'
import { eldestFilter } from './eldest.filter'
import { MyFirstController } from './firstController.controller'

angular.module('app', [])

.controller('MyFirstController', MyFirstController)

.filter('exclam', exclamationFilter)

.filter('doyen', eldestAgeFilter)

.filter('eldest', eldestFilter)

.run(function() {
    console.log('PizzaYOLO !');
})