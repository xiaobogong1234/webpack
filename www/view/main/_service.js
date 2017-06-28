'use strict';
module.exports = angular.module('app.main', []).config(function($stateProvider) {
    $stateProvider.state('main', {
        url: '/main',
        template: require('./main.html'),
        controller: 'mainCtrl',
        resolve: {
            'loadHomeController': function($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function() {
                    var mod = require('./main.js');
                    $ocLazyLoad.load({
                        name: 'app.main'
                    });
                    deferred.resolve(mod.controller);
                }, 'main');
                return deferred.promise;
            }
        }
    });
}).name;