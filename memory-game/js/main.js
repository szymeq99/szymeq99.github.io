/* Tablica z elementami ktore beda losowo układane na stronie */

let animals = ['frog', 'dog', 'spider', 'horse', 'cat', 'otter', 'hippo', 'fish', 'dragon', 'crow', 'frog', 'dog', 'spider', 'horse', 'cat', 'otter', 'hippo', 'fish', 'dragon', 'crow'];
let btn = document.getElementById('startGame');
let container = document.getElementById('container');
let result = 0;
let good = 0;
let bad = 0;

/* Petla która utworzy divy, doda je na strone i ułozy w losowej kolejnosci */
function startGame() {
    for (let i = 0; i < animals.length; i++) {
        let box = document.createElement('div');
        let picture = document.createElement('i');

        picture.classList.add("fas", 'fa-' + animals[i] + '', "picture");
        picture.setAttribute('value', '' + animals[i] + '');
        box.classList.add('box-' + i + '', "mini-container");
        box.setAttribute('id', 'box-' + i + '');

        btn.addEventListener('click', () => {
            container.classList.add('start-game');
        })

        box.appendChild(picture);
        document.getElementById('container').appendChild(box);

        box.style.order = Math.floor(Math.random(animals.length) * animals.length);
    }
}


/* Tablice do przetrzymywania naszych wyborów */
let arrayShowChoice = [];
let arrayChoice = [];
let arrayResult = [];


document.getElementById('container').addEventListener('click', function (e) {
    /* Po kliknieciu pokazuje obrazek oraz sprawdza czy nie została juz odkryty */

    if (e.target.tagName == 'DIV') {
        return;
    } else if (arrayResult.includes(e.target.getAttribute('value'))) {
        return;
    } else {
        e.target.classList.add('show-picture');
    }


    /* dodaje nasze wybory do tablic */
    let choice = e.target.getAttribute('value');
    arrayShowChoice.push(e.target);
    arrayChoice.push(choice);
    // console.log(arrayChoice);
    // console.log(arrayShowChoice);
    // console.log(arrayResult);
    // console.log(e.target.tagName);


    /* Porównywanie naszych wyborów zapisanie ich w odpowiedniej tablicy i przypisanie wyniku*/

    if (arrayChoice.length == 2 & arrayChoice[0] == arrayChoice[1]) {
        arrayResult.push(arrayChoice[0]);
        arrayResult.push(arrayChoice[1]);
        result++;
        document.getElementById('number').innerText = result;
        arrayShowChoice = [];
        arrayChoice = [];
    } else if (arrayChoice.length == 2 & arrayChoice[0] !== arrayChoice[1]) {
        function hide() {
            arrayShowChoice[0].classList.remove('show-picture');
            arrayShowChoice[1].classList.remove('show-picture');
            result++;
            document.getElementById('number').innerText = result;
            arrayShowChoice = [];
        }

        setTimeout(hide, 700);
        arrayChoice = [];
    }

    /* Wyswietlnie informacji o koncu gry */
    
    if (arrayResult.length == 20) {
        document.getElementById('finish').classList.add('finish');
        document.getElementById('finish').innerText = "Gratulacje wygrałeś!"
    }

});

startGame();