angular.module('myApp1', []).service('service2', function(){
   this.ax = function(a, b) {
      return a * b
   }
});

var app = angular.module('myApp', ['ngRoute','myApp1'],function() {
});

app.provider('configSerivce', function(){
    this.dd={a:2};
   this.$get = function() {
            var factory = {};
 
            factory.multiply = function(a, b) {
                return a * b;
            }
            return factory;
        };
});

app.factory('service1', function() {
   var service ={};
   service.multiply = function(a, b) {
      return a * b
   }
   return service;
});

app.controller('page1Controller', function ($scope, $route) {
    $scope.$route = $route;

});
app.controller('page2Controller', function ($scope, $route) { $scope.$route = $route;});
app.config(function ($routeProvider,configSerivceProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'page1.html',
        controller: 'page1Controller'
    }).
    when('/about', {
        templateUrl: 'page2.html',
        controller: 'page2Controller'
    }).
    otherwise({
        redirectTo: '/home'
    });
});
app.controller('myCtrl', ['$scope','service2', function($scope,service2) {
  console.log(service2);
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.getMessage = function() {
        setTimeout(function(){
            $scope.$apply(function() {
                $scope.firstName = "111";
            });
        },2000);
    };
    //$scope.getMessage();
    $scope.$watch('firstName',function(){  
                    //console.log("xx"); 
                });
}]);