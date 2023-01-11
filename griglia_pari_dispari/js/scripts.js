/*

    Creare in JavaScript una griglia 8x8. 
    Ogni cella della griglia contiene un numero casuale da 1 a 64.
    I numeri presenti nelle celle ***non devono essere ripetuti*** (ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

    Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e pari e in rosso se dispari

*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gridContainer = document.getElementById('grid-container');

const numeriGenerati = [];

console.log(this);

for (let i = 0; i < 64; i++) {

    // Crea una nuova cella
    // Aggiungila in #grid-container

    // VERSIONE ALTERNATIVA SENZA RIFERIMENTO AL NUOVO ELEMENTO HTML
    // gridContainer.innerHTML += '<div class="cell"></div>';
    // -------------------------------------------------------------

    const newCell = createNewCell();
    gridContainer.append(newCell);

}

function createNewCell() {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',
    
        function () {
            
            console.log(this);
            console.log(this.classList);

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }

        }
    
    );

    let randomNumber = getRandomNumber(1, 64);

    while(numeriGenerati.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 64);
    }

    numeriGenerati.push(randomNumber);

    console.log(numeriGenerati);

    console.log(randomNumber);
    cell.innerHTML = randomNumber;
    // OPPURE (VERSIONE ALTERNATIVA)
    // cell.append(randomNumber);

    if(randomNumber % 2 == 0){
        cell.classList.add('even');
    }
    else {
        cell.classList.add('odd');
    }

    return cell;

}