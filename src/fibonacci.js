// http://usejsdoc.org/

/**
 * @module myApp
 * @description The myApp modukle is a container for all the application resources
 * */


/**
 * @function test
 * @description takes in two variables and tests if they are the same object reference
 * @param x {object} Input object
 * @param y {object} Input object
 * */
function test(x, y) {
    return x === y;
}

var app = angular.module('myApp', ['ng']); // setter - create an all

// var app = angular.module('myApp'); // get a reference to an existing app

app.run(function ($rootScope) {
    $rootScope.info = 'information from the root scope ... ';
});

app.controller('MyController', function ($scope) {
    $scope.data = 'some info!';

    $scope = {
        todoList: {
            todoText: 'asdfsdf'
        }
    };
});

// input ng-model = "todoText"

