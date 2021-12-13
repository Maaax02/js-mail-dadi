
let email = prompt('inserisci la tua email');

const outputHTML = document.querySelector('.emails');
let allowed = ['pinco@gmail.com', 'max@gmail.com', 'marco@gmail.com'];
let result = false;
let x = 0;

for (x = 0; x < allowed.length; x++){
    if (email === allowed[x]){
        result = true;
    }
}

if (result){
    console.log('La tua email è stata accettata');
    }else{
        console.log('La tua email è stata rifiutata');
    }

let human = Math.floor(Math.random() * 6) + 1;
let ia = Math.floor(Math.random() * 6) + 1;

if (human > ia){
    console.log('human is the winner');
}else{
    console.log('ia is the winner');
}