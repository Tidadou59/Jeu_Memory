var PremiereCarte;
var DeuxiemeCarte;
var BlocTableau;

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
    "img_memory/Gateau.png",
    "img_memory/Gateau.png",

    "img_memory/Horloge.png",
    "img_memory/Horloge.png",

    "img_memory/Journal.png",
    "img_memory/Journal.png",

    "img_memory/Megaphone.png",
    "img_memory/Megaphone.png",

    "img_memory/Money.png",
    "img_memory/Money.png",

    "img_memory/Punaise.png",
    "img_memory/Punaise.png"
];
/*
var Cartes = [];

console.log([Cartes]);

for (var i = 0; i < Cartes.length; i++)
    {
        Cartes2.push(Cartes[i]);
        Cartes2.push(Cartes[i]);
    }

console.log(Cartes2.push(Cartes[i]));
*/
shuffleArray(Cartes); // Mélange des cartes
//console.log(Cartes);
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

        document.getElementById("Tabl_Carte").appendChild(div);
        div.appendChild(img);

        //clique sur toutes les cartes (div)
        document.getElementById('div' + i).addEventListener("click", function ()
        {
            //comparaison des cartes
                // if = si | else = simon
            if (click == 0)
                {
                    click++;
                    CartId1 = "div" + i;
                }
            else
                {
                    CartId2 = "div" + i;
                    click = 0;
                }

            if (CartId1 != CartId2)
                {

                }








        });





    }

for (let i = 0; i < recto.length; i++)
    {
        let elementdiv = recto[i];

    }





/*
document.getElementsByClassName('Cart').addEventListener("click", function test()
{

    if ()

})
*/
