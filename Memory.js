var PremiereCarte;
var DeuxiemeCarte;
var BlocTableau;

var temps;
var minutes;
var secondes;
var T;

var Paire = 0;

var click = 0;
var CartId1;
var CartId2;


/* xxxxxx */
function shuffleArray(array)
    {
        for (let i = array.length -1; i > 0; i--)
            {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
    }

/* Debut Creation des tableaux + Melange des cartes */
let Cartes = [
    "img_memory/CSS.png",
    "img_memory/CSS.png",

    "img_memory/GitHub.png",
    "img_memory/GitHub.png",

    "img_memory/HTML5.png",
    "img_memory/HTML5.png",

    "img_memory/javascript.png",
    "img_memory/javascript.png",

    "img_memory/MySQL.png",
    "img_memory/MySQL.png",

    "img_memory/WordPress.png",
    "img_memory/WordPress.png"
];

shuffleArray(Cartes); // Mélange des cartes
/* Fin Creation des tableaux + Melange des cartes */

let recto = document.getElementsByTagName('img');

for (let i = 0; i < Cartes.length; i++)
    {
        let div = document.createElement("div");
        div.innerHTML = "";
        div.className = "Cart";
        div.id = 'div' + i;

        /* ci-dessous class des images */
        div.style.display = "inline-block";


        let img = document.createElement("img");
        /* ci-dessous class des images */
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.padding = "0px";
        img.style.borderRadius = "30px";
        img.style.border = "solid 1px #ffff00";
        img.src = "Up.png";
        img.id="img" +i;

        document.getElementById("Tabl_Carte").appendChild(div);
        div.appendChild(img);

        //clique sur toutes les cartes (div)
        document.getElementById('img' + i).addEventListener("click", function () {
            document.getElementById('img' + i).src = Cartes[i];

            //comparaison des cartes
            // if = si | else = simon

            //if (CartId1 != CartId2)
            if (click == 0) {
                click++;
                CartId1 = "div" + i;
                carte1 = Cartes[i];
            }
            else {
                CartId2 = "div" + i;
                click = 0;
                carte2 = Cartes[i];

                if (carte1 == carte2 && CartId1 !== CartId2 && "img" + i == "img" + i) {
                    document.getElementById(CartId1).style.visibility = "hidden";
                    document.getElementById(CartId2).style.visibility = "hidden";

                    //Utilisateur gagne , incrementation variable
                    Paire++;

                    let test = document.getElementById("Tabl_Carte");
                    let Resultat = document.getElementById("Resultat");

                    //Si variable vaux 6 ( nombre de paires ) , utilisateur a gagné
                    if (Paire == 6) {
                        //alert('test message');
                        //document.getElementById(Fenetre_de_fin).innerHTML="test";
                        //document.getElementById("Start").addEventListener("click",function () {

                        if (test.style.display === "block") {
                            test.style.display = "none";
                            Resultat.style.display = "block";
                            Resultat.innerHTML = "C'est gagné !"
                        }

                    }
                }

                // Quand utilisateur a gagné, on affiche un ecran permettznt à l'iutilisateur de rejouer



        else
            {

                //delai d'effacement quand on trouve 2 cartes identique
                setTimeout(function () {
                    document.getElementById(CartId1).firstChild.src = "Up.png";
                    document.getElementById(CartId2).firstChild.src = "Up.png";
                }, 1000);

            }
        }

        });
    }




/* Debut Bouton de Remise à Zéro (RaZ) */
/*
document.getElementById('reset').addEventListener("click", function () {
    if (Timer_1) {
        clearTimeout(Timer_1);
    }
    Heure = 0;
    Min = 0;
    Sec = 0;
    document.getElementById("Heure").innerHTML = 0;
    document.getElementById("Minute").innerHTML = 0;
});
*/
/* Fin Bouton de Remise à Zéro (RaZ) */












/*

// loop for repeat  returned card of the back face
for (let i = 0; i < Cartes.length; i++) {

    // if click on the button reset
    document.getElementById('rejouer').addEventListener("click", function () {

// remise à zéro des infos

;
bonnePaire = 0;
document.getElementById("carte" + i).src = `Up.png`;
document.getElementById('temps').style.visibility = "visible";
document.getElementById('score').style.display = "none";
document.getElementById('Tabl_Carte').style.display = "block";
melange();


});
}

 */