
/**
* transit.d3chart Module
*
* The controller that has the d3 chart
*/
angular.module('transit.d3chart', [])
  .controller('ChartCtrl', function ($scope, FBURL, transitData) {
    var _ref = new Firebase(FBURL);
    var chartScope = null;
    _ref.child('agency').on('value', function (snap) {
      $scope.$apply(function() {
        $scope.dataset = snap.val()[0];
      });
    });

    $scope.refreshStops = function () {
      chartScope.refresh();
      transitData.getStops();
    }
    $scope.reanimate = function () {
      _ref.child('stops').remove(function() {
        transitData.getStops();
        chartScope.reanimate();
      });
    }
    this.setChart = function (chart) {
      chartScope = chart;
    }
  });