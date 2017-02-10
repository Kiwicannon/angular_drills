angular.module('arrayApp').controller('arrayController',function($scope,mainSvc){
    $scope.test='controller is working';
    $scope.test1= mainSvc.test1
    $scope.employees=mainSvc.getData()
})