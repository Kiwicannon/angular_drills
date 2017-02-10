angular.module('apiApp').service('mainSvc',function($http){
    this.test1='service is working';

    this.getData= function(){
        return $http({
            method:"GET",
            url:'http://swapi.co/api/people'
        }).then(function(response){
            if(response.status===200){
                console.log(response.data.results)
                return response.data.results
            }return "Error" + response.status
        })
    }
})