'use strict';

/**
* transit.directives Module
*
* Has directives for transit app
*/
angular.module('transit.directives', []).
  directive('busStops', function (FBURL) {
    return {
      link: function (scope, elm, attrs) {
        // initialize d3 tooltips
        var tip = d3.tip().attr('class', 'd3-tip').html(function (d) { return d.stop_lat + ', ' + d.stop_lon; });
        // initialize firebase reference
        var _ref = new Firebase(FBURL);
        // initialize svg element, hard coded height to 1600px for now
        var svg = d3.select(elm[0])
            .append('svg')
            .style('width', '100%')
            .style('height', '1600px');
        svg.call(tip);
        // radius of bus stop circle elements
        var radius = 3;
        // scale to the width of the svg element with padding to keep the circles from being cut off
        var xScale = d3.scale.linear().range([0 + radius, elm[0].clientWidth - radius]);
        // scale to the height of the svg element with padding to keep the circles from being cut off
        var yScale = d3.scale.linear().range([0 + radius, elm[0].clientHeight - radius]);
        // for scaling the latitude of the bus stop to a x coordinate in the screen
        var scaleByX = function (d) { return xScale(d.stop_lon); }
        // for scaling the longitude of the bus stop to a y coordinate in the screen
        var scaleByY = function (d) { return yScale(d.stop_lat); }
        _ref.child('stops').on('value', function (snap) {
          var data = snap.val();
          var minLat = d3.min(data, function (d) { return d.stop_lat; });
          var maxLat = d3.max(data, function (d) { return d.stop_lat; });
          var minLon = d3.min(data, function (d) { return d.stop_lon; });
          var maxLon = d3.max(data, function (d) { return d.stop_lon; });
          xScale.domain([minLon, maxLon]);
          yScale.domain([minLat, maxLat]);
          svg.selectAll('circle').remove();
          svg.selectAll('p')
            .data(data)
            .enter().append('circle')
            .attr('cx', scaleByX)
            .attr('cy', scaleByY)
            .attr('r', radius)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);
        });
      }
    }
  });
