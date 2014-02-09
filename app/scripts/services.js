/**
* transit.services Module
*
* Description
*/
angular.module('transit.services', []).
  factory('transitData', function ($http, FBURL, dataRoot, $interval) {
    var _ref = new Firebase(FBURL);
    function dataToFirebase(data, resource) {
      var responseData = data.split('\r\n');
      var headers = responseData.shift().split(',');
      var dataRef = _ref.child(resource);
      var length = responseData.length;
      var rowIndex = 0;
      var stop = $interval(function (){
        var item = {};
        angular.forEach(responseData[rowIndex].split(','), function (value, index){
          item[headers[index]] = value;
        });
        dataRef.child(rowIndex + '').set(item);
        rowIndex = rowIndex + 1;
        if(rowIndex >= length - 1) {
          $interval.cancel(stop);
        }
      }, 2);
      return dataRef;
    }
    return {
      // uploads data from the agency data file
      getAgency: function () {
        var promise = $http.get(dataRoot + 'agency.txt').then(function (response) {
          return dataToFirebase(response.data, 'agency');
        });
        return promise;
      },
      // uploads data from the calendar data file
      getCalendar: function () {
        var promise = $http.get(dataRoot + 'calendar.txt').then(function (response) {
          return dataToFirebase(response.data, 'calendar');
        });
        return promise;
      },
      // uploads data from the calendar dates data file
      getCalendarDates: function () {
        var promise = $http.get(dataRoot + 'calendar_dates.txt').then(function (response) {
          return dataToFirebase(response.data, 'calendarDates');
        });
        return promise;
      },
      // uploads data from the routes data file
      getRoutes: function () {
        var promise = $http.get(dataRoot + 'routes.txt').then(function (response) {
          return dataToFirebase(response.data, 'routes');
        });
        return promise;
      },
      // uploads data from the shapes data file
      getShapes: function () {
        var promise = $http.get(dataRoot + 'shapes.txt').then(function (response) {
          return dataToFirebase(response.data, 'shapes');
        });
        return promise;
      },
      // uploads data from the stop times data file
      getStopTimes: function () {
        var promise = $http.get(dataRoot + 'stop_times.txt').then(function (response) {
          return dataToFirebase(response.data, 'stopTimes');
        });
        return promise;
      },
      // uploads data from the stops data file
      getStops: function () {
        var promise = $http.get(dataRoot + 'stops.txt').then(function (response) {
          return dataToFirebase(response.data, 'stops');
        });
        return promise;
      },
      // uploads data from the trips data file
      getTrips: function () {
        var promise = $http.get(dataRoot + 'trips.txt').then(function (response) {
          return dataToFirebase(response.data, 'trips');
        });
        return promise;
      }
    }
  });