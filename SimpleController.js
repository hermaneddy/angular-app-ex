var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
		.when('/', 

				{
					controller: 'SimpleController',
					templateUrl: 'partials/view1.html'
				}

			)
        .when('/view2', 

				{
					controller: 'SimpleController',
					templateUrl: 'partials/view2.html'
				}

			)
        .otherwise({redirectTo: '/'});

});

demoApp.factory('simpleFactory', function(){
var customers = [
                { name: 'Dave Jones', city: 'Kentucky' },
                { name: 'Mister X', city: 'SF' }
            ];

var factory = {};

factory.getCustomers = function(){
	return customers;
}

factory.postCustomer = function(customer){



};

return factory;

});

var controllers = {};
controllers.SimpleController = function ($scope, simpleFactory){

$scope.customers = [];
init();
function init(){
	$scope.customers = simpleFactory.getCustomers();
}

$scope.addCustomer = function(){

	$scope.customers.push({
		name: $scope.newCustomer.name,
		city: $scope.newCustomer.city
	    }
		);

};



}


demoApp.controller(controllers);