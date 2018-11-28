var flippedCard = false; /* variable retourne carte */
var PremiereCarte;
var DeuxiemeCarte;
var BlocTableau;




/* Parcour les class du tableau (Cart) */
var recto = document.getElementsByClassName('img');
for (var i = 0; i < recto.length; i++)
{
    var elementdiv = recto[i];
    elementdiv.onclick=function () {
       alert('La Fenetre d\'Alerte Fonctionne');

    // ci-dessous : rajouter le code pour rattacher





    }
}


var Paire = 0;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



/* Debut Code chrono */
/*
var DemarreTemps = 0;
var Demarre = 0;
var Fin = 0;
var TempsId = 0;

function Chrono()
{
    Fin = new Date();
    different = Fin - Demarre;
    different = new Date(different);

    var secondes = different.getSecondes();
    var minutes = different.getMinutes();

    if (secondes < 10)
    {
        secondes = "0" + secondes
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes
    }

    document.getElementById("Chronos").innerHTML = minutes + ":" + secondes;
    TempsId = setTimeout("Chrono()", 10)
}
*/
/* Fin Code chrono */



/* Affiche le chrono */
/*
var secondes = 0;
var timer;

function minutes
{
    secondes = min * 60;
}

function chronos()
{
    if (secondes > 0)
    {
        var minutes = Math.floor(secondes/60);
        secondes -= minutes * 60;


    }
}

//Démarrer le Chrono
function DemarrerChrono()
{
    timer = setInterval('Chrono()', 1000);
    document.getElementById('bouton démarrage').style.display = 'none';

    // a faire : afficher le chrono sur la page et finir le code


}

*/





/* Debut Chronos */
// Chronomètre
/*

var butstart = document.getElementById('Start');
var butreset = document.getElementById('reset');

butreset.disabled = true;
butstart.disabled = false;

var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

function chrono() {

    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (msec < 10) {
        msec = "00" + msec
    } else if (msec < 100) {
        msec = "0" + msec
    }
    document.getElementById("AfficheChrono").innerHTML = min + ":" + sec + ":" + msec;
    timerID = setTimeout("chrono()", 10)
}

// Demarrage Chrono

function chronoStart()
{
    butstart.disabled = true;
    butreset.disabled = false;
    start = new Date();
    chrono();
    lockBoard = false;
    shuffle();
}

// RESET

function chronoReset()
{
    lockBoard = true;
    document.getElementById("AfficheChrono").innerHTML = "00:00:000";
    clearTimeout(timerID);
    butstart.disabled = false;
    unflipCards();

    for (var i = 0; i < card.length; i++)
    {
        card[i].classList.remove('flip');
        resetBoard();
    }
    lockBoard = true;
}

// PAUSE CHRONO

function chronoPause()
{
    clearTimeout(timerID);
}
*/
/* Fin Chronos */




/* Debut Creation des tableaux + Melange des cartes */
var Cartes = [
    "img_memory/Gateau.png",
    "img_memory/Horloge.png",
    "img_memory/Journal.png",
    "img_memory/Megaphone.png",
    "img_memory/Money.png",
    "img_memory/Punaise.png"
];

var Cartes2 = [];

for (var i = 0; i < Cartes.length; i++)
{
    Cartes2.push(Cartes[i]);
    Cartes2.push(Cartes[i]);
}

shuffleArray(Cartes2);
/* Fin Creation des tableaux + Melange des cartes */

for (var i = 0; i < Cartes2.length; i++)
{
    var div = document.createElement("div");
    div.innerHTML = "";
    div.className = "Cart";

    /* ci-dessous class des images */
    div.style.display = "inline-block";



    var img = document.createElement("img");
    /* ci-dessous class des images */
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.padding = "0px";
    img.style.borderRadius = "30px";
    img.style.border = "solid 1px #ffff00";
    img.src = "Up.png"

    document.getElementById("Tabl_Carte").appendChild(div);
    div.appendChild(img);
}































/* Générer les cartes */
/*
for (var i = 0; i < Cartes.length; i++)
{
    var img = document.createElement("img");
    var aleatoire = Math.floor(Math.random() * Cartes.length);
}

document.getElementById("xxxxxx").appendChild(img);
*/


// event click ...

//Carte_N1.addEventListener('click', function () {
/*
function myFunction('Carte_N1')
{
    alert("BRAVO , le bouton fonctionne hihi")

};
*/