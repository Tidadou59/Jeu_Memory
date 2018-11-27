var recto = document.getElementsByClassName('Cart');
for (var i = 0; i < recto.length; i++)
{
    var elementdiv = recto[i];
    elementdiv.onclick=function () {
       alert('lol');

       // ci-dessous : rajouter le code pour rattacher





    }
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}






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




/* Création des tableaux + Mélange des cartes */

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