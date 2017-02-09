angular.module('apiApp').controller('mainCtrl',function($scope,mainSvc){

    $scope.test='contorller is working';
    $scope.test1= mainSvc.test1
    mainSvc.getData().then(function(response){
        $scope.smurfs= response
    console.log($scope.smurfs)
})



})