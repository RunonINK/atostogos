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
          $scope.jau = "ATOSTOGOS PRASIDĖJO!!!!! VALIOOOOOOO!!!!!!";
      return  "ATOSTOGOS";
      }
      
      
      $scope.called --;

      $scope.hours = Math.floor($scope.called / 3600);
      $scope.called %= 3600;
      $scope.minutes = Math.floor($scope.called / 60);
      $scope.seconds = $scope.called % 60;
      
      
      
  };
    
    $scope.val = function(h){
        
        if(h===0){return "Valandų"}
        else if(h===10){return "Valandų"}
        else if(h===11){return "Valandų"}
        else if(h===12){return "Valandų"}
        else if(h===13){return "Valandų"}
        else if(h===14){return "Valandų"}
        else if(h===15){return "Valandų"}
        else if(h===16){return "Valandų"}
        else if(h===17){return "Valandų"}
        else if(h===18){return "Valandų"}
        else if(h===19){return "Valandų"}
        else if(h===20){return "Valandų"}
        
        else if(h % 10 === 1){return "Valanda"}
        else if(h % 10 === 0){return "Valandų"}
        else {return "Valandos"}
    }
    
    $scope.min = function(m){
        
        if(m===0){return "Minučių"}
else if(m===10){return "Minučių"}
        else if(m===11){return "Minučių"}
        else if(m===12){return "Minučių"}
        else if(m===13){return "Minučių"}
        else if(m===14){return "Minučių"}
        else if(m===15){return "Minučių"}
        else if(m===16){return "Minučių"}
        else if(m===17){return "Minučių"}
        else if(m===18){return "Minučių"}
        else if(m===19){return "Minučių"}
        else if(m===20){return "Minučių"}
        
        else if(m % 10 === 1){return "Minutė"}
        else if(m % 10 === 0){return "Minučių"}
        else {return "Minutės"}
    }
    
    $scope.sec = function(s){
        
        if(s===0){return "Sekundžių"}
        else if(s===10){return "Sekundžių"}
        else if(s===11){return "Sekundžių"}
        else if(s===12){return "Sekundžių"}
        else if(s===13){return "Sekundžių"}
        else if(s===14){return "Sekundžių"}
        else if(s===15){return "Sekundžių"}
        else if(s===16){return "Sekundžių"}
        else if(s===17){return "Sekundžių"}
        else if(s===18){return "Sekundžių"}
        else if(s===19){return "Sekundžių"}
        else if(s===20){return "Sekundžių"}
        
        else if(s % 10 === 1){return "Sekundė"}
        else if(s % 10 === 0){return "Sekundžių"}
        else {return "Sekundės"}
    }
    
    $scope.galioja = ["Sauliui", "Linai", "Pauliui"];
    
    $scope.setGalioja = function(){
        $scope.galioja.push({text:todoText, done:false});
        $scope.todoText = '';
    }
    
    
    $scope.getGalioja = function(){
        return $scope.galioja;
    }
    
    
  
  var myFunctionToCall = ionic.throttle(increaseCalled, 1000);
  
  $interval(function(){
    $scope.increaseTried();
    myFunctionToCall();
  }, 1000);
    
    
    
});