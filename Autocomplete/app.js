//Author: Christian Mutaba

//Autocompletion feature using the random words below

(function(){
  var app = angular.module('expion', []);

 //List of random words
 
  var randomWords = [
              
    {word : 'overnobleness'},
    {word : 'slenderise'},
    {word : 'outtear'},
    {word : 'intertropical'},
    {word : 'everlastingly'},
    {word : 'antepenult'},
    {word : 'castellan'},
    {word : 'hoke'},
    {word : 'roping'},
    {word : 'servian'},
    {word : 'bellona'},
    {word : 'recrystallising'},
    {word : 'statue'},
    {word : 'jollify'},
    {word : 'myrmecophile'},
    {word : 'consort'},
    {word : 'equiponderation'},
    {word : 'translight'},
    {word : 'glyoxaline'},
    {word : 'multimotor'},
    {word : 'calibre'},
    {word : 'conformist'},
    {word : 'isolatable'},
    {word : 'carking'},
    {word : 'textualist'},
    {word : 'nonconsonance'},
    {word : 'heartedness'},
    {word : 'decarburizing'},
    {word : 'dunning'},
    {word : 'lowser'},
    {word : 'bason'},
    {word : 'agincourt'},
    {word :  'zibelline'},
    {word : 'veridical'},
    {word : 'lethal'},
    {word : 'houseman'},
    {word : 'azan'},
    {word : 'unseen'},
    {word : 'germaine'},
    {word : 'colitis'},
    {word : 'aortitis'},
    {word : 'urinose'},
    {word : 'uncrooked'},
    {word : 'genevive'},
    {word : 'nonfloriferous'},
    {word : 'unrevoked'},
    {word : 'dignity'},
    {word : 'preestimation'},
    {word : 'horsewoman'},
    {word : 'cerenkov'}
  ];

  //---
  //Autocomplete Controller
  
  app.controller("autoCompleteCtrl", ['$scope', function($scope){
    this.dictionary = randomWords;
        
    this.autocomplete = function(word){
                
      $scope.search = word;

    };
  //---
  
  }]);
  
})();