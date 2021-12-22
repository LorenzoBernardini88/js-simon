
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice 
//quanti e quali dei numeri da indovinare sono stati individuati.

//Svolgimento : 

let numArr = [];

function generaNum( numRandom ){

    while( numArr.length < numRandom )
    {
        let numRandom = Math.floor(Math.random()*100+1);
        if( !numArr.includes(numRandom)){
        numArr.push(numRandom);
        }
    }
}
    
generaNum(5);

console.log(numArr);