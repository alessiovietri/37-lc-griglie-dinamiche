/*

    Creare in JavaScript una griglia 8x8. 
    Ogni cella della griglia contiene un numero casuale da 1 a 64.
    I numeri presenti nelle celle ***non devono essere ripetuti*** (ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

    Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e pari e in rosso se dispari


    CAMPO MINATO
    Consegna
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


*/

const numeriGenerati = [];

const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('play');

// console.log(this);

playButton.addEventListener('click',

    function () {

        console.log('Cliccato play');
        
        gridContainer.innerHTML = '';

        for (let i = 1; i <= 100; i++) {

            // Crea una nuova cella
            // Aggiungila in #grid-container
        
            // VERSIONE ALTERNATIVA SENZA RIFERIMENTO AL NUOVO ELEMENTO HTML
            // gridContainer.innerHTML += '<div class="cell"></div>';
            // -------------------------------------------------------------
        
            const newCell = createNewCell(i);
            gridContainer.append(newCell);
        
        }

    }

);

function createNewCell(num /* oppure content, oppure valore */) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',
    
        function () {
            
            // console.log(this);
            // console.log(this.classList);

            console.log(num);
            console.log(this.innerText);

            this.classList.add('clicked');

            // if(this.classList.contains('clicked')){
            //     this.classList.remove('clicked');
            // }
            // else{
            //     this.classList.add('clicked');
            // }

        }
    
    );

    cell.innerHTML = num;
    // OPPURE (VERSIONE ALTERNATIVA)
    // cell.append(num);

    // if(num % 2 == 0){
    //     cell.classList.add('even');
    // }
    // else {
    //     cell.classList.add('odd');
    // }

    return cell;

}

// function getUniqueRandomNumber(min, max) {

//     let randomNumber = getRandomNumber(min, max);

//     while(numeriGenerati.includes(randomNumber)){
//         randomNumber = getRandomNumber(min, max);
//     }

//     numeriGenerati.push(randomNumber);

//     // console.log(numeriGenerati);

//     // console.log(randomNumber);

//     return randomNumber;

// }

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }