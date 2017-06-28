'use strict';
require('../less/comm.less');

require("../../node_modules/font-awesome/css/font-awesome.css")
require("../../node_modules/bootstrap-table/dist/bootstrap-table.min.css")
angular.module('app', [

        require('angular-ui-router'),
        require('oclazyload'),
        require('./routing.js'),
        require('./directive.js'),
        require('./factory.js'),
        require('./filter.js')
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        // $locationProvider.html5Mode(true);
    }).run(
        [
            '$templateCache',
            function($templateCache) {
                // Put in cache the files that are ng-include'd in templates
                $templateCache.put('home.new.html', require('../view/home/about/home.new.html'));
                $templateCache.put('home.view.html', require('../view/home/about/home.view.html'));
            }
        ])