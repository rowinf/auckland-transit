Auckland Transit App built from AngularJS, d3, and Firebase

Uses [Auckland Transit feed](http://www.maxx.co.nz/about-maxx/google-transit-feed.aspx) data which is included in the project 

If you have NodeJS and Grunt installed you can run the project with `grunt server`

Please start your own firebase account and use it to host your data to see its awesome power. To do so, edit app.js by changing the line `.constant('FBURL', 'https://d3-test-data.firebaseio.com/');` to have the URL to your own firebase.