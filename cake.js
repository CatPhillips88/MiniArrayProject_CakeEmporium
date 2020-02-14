// ARRAY LIST
let availableCakes = ['Rainbow', ' Chocolate', ' Florentina', ' Victoria Sponge', ' Red Velvet'];


// TARGET ID HTML ATTRIBUTE TO DISPLAY ARRAY VALUES - DOM METHOD 
let showAvailable = document.getElementById('takeYourPick');

// CAN BE CHANGED USING BRACKET NOTATION TO SHOW VALUE AT A SPECIFIC INDEX
// TO SHOW ALL VALUES, DON'T USE BRACKET NOTATION
showAvailable.textContent = availableCakes;

let chosenCake = document.getElementById('inTheOven');

chosenCake.textContent = availableCakes[0];




