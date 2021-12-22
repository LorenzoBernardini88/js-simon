
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice 
//quanti e quali dei numeri da indovinare sono stati individuati.

//Svolgimento : 

let numArr = [];

function generaNum( numRandom ){ //Funzione che crea array numeri casuali .

    while( numArr.length < numRandom )
    {
        let numRandom = Math.floor(Math.random()*100+1);
        if( !numArr.includes(numRandom)){
        numArr.push(numRandom);
        }
    }
    let container = document.getElementById('num_container');
    container.innerHTML = `<span class="content">${numArr}</span>`;
}
generaNum(5);
console.log(numArr);
let numeriSpan = document.getElementsByClassName('content');
setTimeout ( memory , 5000);

function memory (){
    numeriSpan = '';
    let numArr2 = [];
    for(i=0; i<numArr.length; i++){
        let numeroUser = parseInt(prompt('Inserisci un numero compreso da 1 a 100'));
        if(!numArr2.includes(numeroUser)){
            numArr2.push(numeroUser);
        }else{
            i--;
        }
    }
    
}