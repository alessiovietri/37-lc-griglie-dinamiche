/*

    Creare in JS una griglia 8x8

    Ogni volta che clicco su un quadrato questo si colora di verde
    (e si decolora al secondo click)

*/

const gridContainer = document.getElementById('grid-container');

console.log(this);

for (let i = 0; i < 64; i++) {

    // Crea una nuova cella
    // Aggiungila in #grid-container

    // VERSIONE ALTERNATIVA SENZA RIFERIMENTO AL NUOVO ELEMENTO HTML
    // gridContainer.innerHTML += '<div class="cell"></div>';
    // -------------------------------------------------------------

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.addEventListener('click',
    
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

    gridContainer.append(newCell);

}