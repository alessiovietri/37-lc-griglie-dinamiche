function funzioneUno(num) {
    console.log('funzioneUno - num prima della modifica:', num);
    num = num + 2;
    console.log('funzioneUno - num dopo la modifica:', num);

    return num;
}

function funzioneDue(str) {
    console.log('funzioneDue - str prima della modifica:', str);
    str = str + ' mondo!';
    console.log('funzioneDue - num dopo la modifica:', str);

    return str;
}

function funzioneTre(arr) {
    console.log('funzioneTre - arr prima della modifica:', arr);
    arr.push(4);
    console.log('funzioneTre - arr dopo la modifica:', arr);

    return arr;
}

const numero = 3;
const stringa = 'Ciao';
const lista = [1, 2, 3];

console.log('numero prima della chiamata a funzioneUno:', numero);
// Quando la costante numero viene passata a funzioneUno, il suo valore NON cambia
const risultatoFunzioneUno = funzioneUno(numero);
console.log('risultatoFunzioneUno:', risultatoFunzioneUno);
console.log('numero dopo la chiamata a funzioneUno:', numero);

console.log('stringa prima della chiamata a funzioneDue:', stringa);
// Quando la costante stringa viene passata a funzioneDue, il suo valore NON cambia
const risultatoFunzioneDue = funzioneDue(stringa);
console.log('risultatoFunzioneDue:', risultatoFunzioneDue);
console.log('stringa dopo la chiamata a funzioneDue:', stringa);

console.log('lista prima della chiamata a funzioneTre:', lista);
// Quando la costante lista viene passata a funzioneTre, il suo contenuto CAMBIA
const risultatoFunzioneTre = funzioneTre(lista);
console.log('risultatoFunzioneTre:', risultatoFunzioneTre);
console.log('lista dopo la chiamata a funzioneTre:', lista);


/*

    SPIEGAZIONE:

    Questo succede perché quando passiamo ad una funzione una variabile che contiene un valore di tipo numerico, stringa, booleano (true/false) o undefined,
    all'interno della funzione VIENE FATTA UNA COPIA di quella variabile e quindi quella originale non cambia (come numero o stringa)

    Mentre, quando passiamo ad una funzione una variabile che contiene un array o un oggetto (che vedremo più avanti),
    all'interno della funzione, Javascript modifica effettivamente la variabile originale, quindi il contenuto di quell'array o di quell'oggetto cambia

*/