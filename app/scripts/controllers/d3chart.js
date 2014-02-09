
/**
* transit.d3chart Module
*
* The controller that has the d3 chart
*/
angular.module('transit.d3chart', [])
  .controller('ChartCtrl', function ($scope, FBURL, transitData) {
    var _ref = new Firebase(FBURL);
    _ref.child('agency').on('value', function (snap) {
      $scope.$apply(function() {
        $scope.dataset = snap.val()[0];
      });
    });

    $scope.refreshStops = function () {
      _ref.child('stops').remove();
      transitData.getStops();
    }
  });