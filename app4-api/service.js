angular.module('apiApp').service('mainSvc',function($http){
    this.test1 = 'service is working';
    var baseUrl= 'http://smurfs.devmounta.in/smurfs/'
    this.getData = function(){
        return $http({
            method:"GET",
            url: baseUrl
        }).then(function(response){
            if(response.status === 200){
                return response.data
            }return "Error!"
        })
    }
})