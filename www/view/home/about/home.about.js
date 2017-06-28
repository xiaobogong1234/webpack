'use strict';
module.exports = angular.module("app.home").controller("homeaboutCtrl", function(arrfun, $scope, $state) {

    $scope.test = function() {
        //测试jquery
        $("h4").css({
            'background-color': 'red'
        });
    };
    $scope.statego = function() {
        $state.go("home");
    };


    //测试factory
    arrfun.GetBoolVal(123);

}).controller("homenewCtrl", function(arrfun, tablefun, $scope, $state) {
    //测试ng-include
    $scope.data = "我是include";
}).controller("homeviewCtrl", function(arrfun, tablefun, $scope, $state) {
    //测试ng-include
    $scope.data = "我是include2";
}).
name;