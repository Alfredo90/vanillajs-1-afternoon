let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);


function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
  
    
}

function reset(){
    let diamonds = document.getElementById('diamonds');
    let clubs = document.getElementById('clubs');
    let spades = document.getElementById('spades');
    let hearts = document.getElementById('hearts');
    diamonds.style.color = 'grey';
   clubs.style.color = 'grey';
    spades.style.color = 'grey';
    hearts.style.color = 'grey';
}