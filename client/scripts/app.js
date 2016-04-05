(function(){
    
    
angular

    .module('myApp',['ngRoute'])
    
    .controller('MainCtrl', [function(){
        console.log('working');
    }])
    
    .controller('TabsCtrl', ['$scope',function($scope){
        $scope.tab = 1;
        $scope.setTab = function(num){
            return $scope.tab = num;
        }
        $scope.checkTab = function(num) {
            if ($scope.tab === num){
                return true;
            }
            return false;
        }
    }])
    
    .controller('FormCtrl', [function(){
       console.log('form Ctrl'); 
    }])
    
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
               templateUrl : './pages/home.html' 
            })
            
            .when('/tabs', {
                templateUrl : './pages/tab.html',
                controller : 'TabsCtrl'
            })
            
            .when('/form', {
                templateUrl : './pages/form.html',
                controller : 'FormCtrl'
            });
    }]);
    
    
})();