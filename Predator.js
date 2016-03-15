"use strict"

var Predator = (function() {
  var carnivores = [];
  var herbivores = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();//constructor function
          loader.open("GET","carnivores.json");//tell loader where to go
          loader.send();//tell loader to execute


      loader.addEventListener("load", function () {
        // Set the value of the private array, the json file has one key, carnivores
        carnivores = JSON.parse(this.responseText).carnivores;
        console.log(carnivores );
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores);

      });
    },
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();//constructor function
          loader.open("GET","herbivores.json");//tell loader where to go
          loader.send();//tell loader to execute


      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText).herbivores;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(herbivores);

      });
    },   
  }
})();
