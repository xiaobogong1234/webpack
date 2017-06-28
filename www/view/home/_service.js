'use strict';
module.exports = angular.module('app.home', [])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/home',
            template: require('./home/home.html'),
            controller: 'homeCtrl',
            resolve: {
                'loadHomeController': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function() {
                        var mod = require('./home/home.js');
                        $ocLazyLoad.load({
                            name: 'app.home'
                        });
                        deferred.resolve(mod.controller);
                    }, 'home');
                    return deferred.promise;
                }
            }
        }).state('homeabout', {
            url: '/about',
            template: require('./about/home.about.html'),
            resolve: {
                'loadHomeController': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function() {
                        var mod = require('./about/home.about.js');
                        $ocLazyLoad.load({
                            name: 'app.home'
                        });
                        deferred.resolve(mod.controller);
                    }, 'homeabout');
                    return deferred.promise;
                }
            }
        });
    }).name;