"use strict"

function showCarnivores (carnivores) {
      let list=document.getElementById("carnivores-list")
      let outputString = "";
      for (var i = 0; i < carnivores.length; i++) {
        let currentCarnivore = carnivores[i];
        outputString += `<h1>${currentCarnivore.name}</h1>`
        outputString += `<h5>${currentCarnivore.family}</h5>`
        list.innerHTML = outputString;
      };
    }


function showHerbivores (herbivores) {
  let list=document.getElementById("herbivores-list")
      let outputString = "";
      for (var i = 0; i < herbivores.length; i++) {
        let currentHerbivore = herbivores[i];
        outputString += `<h1>${currentHerbivore.name}</h1><h5>${currentHerbivore.family}</h5>`
        list.innerHTML = outputString;
      };

}

Predator.loadCarnivores(showCarnivores);//showCarnivores is the callBackToInvoke
Predator.loadHerbivores(showHerbivores);//showHerbivores is the callBackToInvoke
