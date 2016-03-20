// https://docs.angularjs.org/guide/unit-testing

describe('myApp module', function () {

    // $rootScope.info = '''

    var $scope;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    describe('MyController', function () {
        it('should have a property data on $scope', function () {
            var MyController = $scontroller('MyController', $scope);
            $scope.getData();
            expect($scope.data).not.toBeUndefined();
            expect($scope.info).not.toBeUndefined();
        })
    });

});