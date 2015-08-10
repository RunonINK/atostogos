angular.module('starter.myController', [])

.controller('AppCtrl', function ($scope, $interval) {
    
    $scope.daba = Date.now();
    
    $scope.dabar = function(){
    return Date.now();
    }
    
   
    $scope.startdate = new Date().getMonth();
     $scope.enddate = new Date(2015, 07, 10, 17);
    

    
    
    
    $scope.getSiandien =function(){
    
    $scope.t1 = new Date(2015, 07, 14, 17, 0, 0, 0)
$scope.t2 = new Date(2015, 07, new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), 0)
$scope.dif = $scope.t1.getTime() - $scope.t2.getTime()

$scope.Seconds_from_T1_to_T2 = $scope.dif / 1000;
$scope.Seconds_Between_Dates = Math.abs($scope.Seconds_from_T1_to_T2);
    
    return $scope.Seconds_Between_Dates
    }
    $scope.called = $scope.Seconds_Between_Dates;
    
       $scope.gaga = function(liko){
       
     //    $scope.hours = Math.floor(liko / 3600);
       //    liko %= 3600;
         //  $scope.minutes = Math.floor(liko / 60);
           $scope.seconds = liko % 60;
           return $scope.seconds
           
       }
    
    
    
  
  $scope.increaseTried = function(){
   
      return  $scope.Seconds_Between_Dates
      
 //     $scope.gaga($scope.Seconds_Between_Dates)
   //   
  //    return $scope.seconds
  };
  
  var increaseCalled = function(){

      
      $scope.called =  $scope.getSiandien()
      
      if ($scope.called < 0){
          $scope.jau = "ATOSTOGOS PRASIDĖJO!!!!!";
      return  "ATOSTOGOS";
      }
      
      
      $scope.called --;

      $scope.hours = Math.floor($scope.called / 3600);
      $scope.called %= 3600;
      $scope.minutes = Math.floor($scope.called / 60);
      $scope.seconds = $scope.called % 60;
      
      
      
  };
  
  var myFunctionToCall = ionic.throttle(increaseCalled, 1000);
  
  $interval(function(){
    $scope.increaseTried();
    myFunctionToCall();
  }, 1000);
    
    
    
});