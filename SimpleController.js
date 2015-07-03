var demoApp = angular.module('demoApp', []);



demoApp.controller()        


var controllers = {};
controllers.SimpleController = function ($scope){

$scope.customers = [
                { name: 'Dave Jones', city: 'Kentucky' },
                { name: 'Mister X', city: 'SF' }
            ];
}

demoApp.controller(controllers);