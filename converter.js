var convertButton = document.getElementById("converter");
var clearButton = document.getElementById("clear");
var radios = document.getElementsByName("tempType");
var tempElements = document.getElementById("convertedTemp");


// define conversion functions and radio button selection
function determineConverter () {
  var inputTemp = document.getElementById("temp").value;

  function toCelsius () {
    var celsius = (inputTemp - 32) * (5/9);
    tempElements.innerHTML += celsius;
  }

  function toFahrenheit () {
    var fahrenheit = (inputTemp * (9/5)) + 32; 
    tempElements.innerHTML += fahrenheit;
  }

  if (radios[0].checked) {
    toCelsius();
    if (document.getElementById("temp").value > 90) {
      tempElements.style.background = "red";
    } else if (document.getElementById("temp").value < 32) {
      tempElements.style.background = "blue";
    } else {
      tempElements.style.background = "green";
    }
  } else {
    toFahrenheit();
    if (document.getElementById("temp").value > 32) {
      tempElements.style.background = "red";
    } else if (document.getElementById("temp").value < 0) {
      tempElements.style.background = "blue";
    } else {
      tempElements.style.background = "green";
    }
  }
}

//buttons either convert or clear
convertButton.addEventListener("click", determineConverter);
document.onkeydown = function() {
  if(window.event.keyCode == 13){
    determineConverter();
  }
};

clearButton.addEventListener("click", function clearText () {
  tempElements.innerHTML = ""; 
  document.getElementById("temp").value = "";
})

