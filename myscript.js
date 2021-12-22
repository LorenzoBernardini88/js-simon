
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice 
//quanti e quali dei numeri da indovinare sono stati individuati.

//Svolgimento : 

let numArr = [];//creo array per numeri random creati dal pc .

function generaNum( numRandom ){ //Funzione che crea array numeri casuali .

    while( numArr.length < numRandom )
    {
        let numRandom = Math.floor(Math.random()*100+1);
        if( !numArr.includes(numRandom)){
        numArr.push(numRandom);
        }
    }
    let container = document.getElementById('num_container');
    container.innerHTML = `<span id="content">${numArr}</span>`;
}

generaNum(5);//Richiamo funzione.
console.log(numArr);
let numeriSpan = document.getElementById('content'); //Richiamo elemento span creato con funzione generaNum.

setTimeout ( memory , 5000); //setTimeout per funzione memory.

function memory (){
    numeriSpan.innerHTML = '';
    let numArr2 = [];
    for(i=0; i<numArr.length; i++){
        let numeroUser = parseInt(prompt('Inserisci un numero compreso da 1 a 100'));
        if(!numArr2.includes(numeroUser)){
            numArr2.push(numeroUser);
        }else{
            i--;
        }
    }
    console.log(numArr2);
    numeriSpan.innerHTML = numArr2;
}// Funzione memory genera numeri scelti dall'utente.