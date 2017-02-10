angular.module('app').controller('mainCtrl',function($scope,mainSvc){
    $scope.test= 'the controller is working';
    $scope.test1= mainSvc.test1
})