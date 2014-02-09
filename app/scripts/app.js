'use strict';

/**
* transit.config Module
*
* Sets config values for the transit app
*/
angular.module('transit.config', [])
  .constant('dataRoot','google_transit/')
  .constant('FBURL', 'https://d3-test-data.firebaseio.com/');

/**
* aucklandTransitApp Module
*
* This module provides routing for the transit app
*/
angular.module('aucklandTransitApp', ['ngRoute', 'transit.d3chart', 'transit.upload', 'transit.services', 'transit.config', 'transit.directives'])
  .config(function ($routeProvider) {
    $routeProvider.when('/upload', {
      templateUrl: 'views/upload.html',
      controller: 'UploadCtrl'
    });
    $routeProvider.when('/d3chart', {
      templateUrl: 'views/d3chart.html',
      controller: 'ChartCtrl'
    });
    $routeProvider.when('/sources', {
      templateUrl: 'views/sources.html'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/sources.html'
    });
  });