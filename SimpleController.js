var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
		.when('/view1', 

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

demoApp.controller()        


var controllers = {};
controllers.SimpleController = function ($scope){

$scope.customers = [
                { name: 'Dave Jones', city: 'Kentucky' },
                { name: 'Mister X', city: 'SF' }
            ];

$scope.addCustomer = function(){

	$scope.customers.push({
		name: $scope.newCustomer.name,
		city: $scope.newCustomer.city
	    }
		);

};



}


demoApp.controller(controllers);