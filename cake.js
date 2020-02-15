// ARRAY LIST OF CAKES 
let availableCakes = ['Rainbow', ' Chocolate', ' Florentina', ' Victoria Sponge', ' Red Velvet'];


// TARGET ID HTML ATTRIBUTE TO DISPLAY ARRAY VALUES - DOM METHOD 
let showAvailable = document.getElementById('takeYourPick');


// BRACKET NOTATION WITH INDEX POSITION TO CHANGE ARRAY VALUE OF CAKE

availableCakes[1] = ' Millie-Feuille';

// textContent RETURNS STRING TEXT CONTENT FROM THE ARRAY 
// TO SHOW ALL ARRAY VALUES, DON'T USE BRACKET NOTATION
showAvailable.textContent = availableCakes;

let chosenCake = document.getElementById('inTheOven');

// CAN BE CHANGED USING BRACKET NOTATION TO SHOW VALUE AT A SPECIFIC INDEX
chosenCake.textContent = availableCakes[0];










