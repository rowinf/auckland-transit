'use strict';

/**
* transit.upload Module
*
* Has the controller for uploading transit data
*/
angular.module('transit.upload', ['transit.services'])
  .controller('UploadCtrl', function ($scope, transitData) {
    $scope.uploadAgency = function () {
      $scope.dataset = [];
      // load the agency data and render all uploaded json objects in the dom
      transitData.getAgency().then(function (ref) {
        ref.on('child_added', function (snapshot) {
          $scope.dataset.push(snapshot.val());
        });
      });
    }
    $scope.uploadCalendar = function () {
      $scope.dataset = [];
      // load the calendar data and render all uploaded json objects in the dom
      transitData.getCalendar().then(function (ref) {
        ref.on('child_added', function (snapshot) {
          $scope.dataset.push(snapshot.val());
        });
      });
    }
    $scope.uploadCalendarDates = function () {
      $scope.dataset = [];
      // load the calendar dates data and render all uploaded json objects in the dom
      transitData.getCalendarDates().then(function (ref) {
        ref.on('child_added', function (snapshot) {
          $scope.dataset.push(snapshot.val());
        });
      });
    }
    $scope.uploadRoutes = function () {
      $scope.dataset = [];
      // load the routes data and render all uploaded json objects in the dom
      transitData.getRoutes().then(function (ref) {
        ref.on('child_added', function (snapshot) {
          $scope.dataset.push(snapshot.val());
        });
      });
    }
    $scope.uploadShapes = function () {
      $scope.dataset = [];
      // load the shapes data and render all uploaded json objects in the dom
      transitData.getShapes().then(function (ref) {
        ref.on('child_added', function (snapshot) {
          $scope.dataset.push(snapshot.val());
        });
      });
    }
    $scope.uploadStopTimes = function () {
      $scope.dataset = [];
      // load the stop times data and do nothing
      transitData.getStopTimes().then(function (ref) {
        $scope.dataset = 'Uploading the stop times to firebase, this will take a while';
      });
    }
    $scope.uploadStops = function () {
      $scope.dataset = [];
      // load the stop data and render all uploaded json objects in the dom
      transitData.getStops().then(function (ref) {
        // ref.on('child_added', function (snapshot) {
        //   $scope.dataset.push(snapshot.val());
        // });
      });
    }
    $scope.uploadTrips = function () {
      $scope.dataset = [];
      // load the trips data and render all uploaded json objects in the dom
      transitData.getTrips().then(function (ref) {
        ref.on('child_added', function (snapshot) {
          $scope.dataset.push(snapshot.val());
        });
      });
    }
  });
