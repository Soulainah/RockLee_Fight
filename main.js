//===Fonction pour changer le Background image
function terrain() {
    document.querySelector('.ecranjeu').style.backgroundImage = src('/home/descodeuses/Documents/Projets/Rocklee_Fight/images/garara_rocklee.jpg');
 } 
//===Fonction pour musique
var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}
//pour revenir a "Play";
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
//===========Declare les variables des images
var rocklee = document.querySelector('.rocklee');
var gaara = document.querySelector('.gaara');
const rejouerBtn =  document.getElementById('rejouer');
//===Variable point de vie
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';
const viesgaara = document.querySelector('.viesgaara');
const viesrocklee = document.querySelector('.viesrocklee');
//===Déclarer le tableau d'élément [0,1]
var images_rocklee = ['attaquer', 'defendre'];
var images_gaara = ['attaquer', 'defendre'];
//j'ai donné le parametre à Rockleechoice de (r) puis concatener les images 'images/' + la var du tableur + png
//variable du Joueur (parametre r = rocklee)
var Rockleechoice = (r) =>{
    rocklee.src = 'images/rocklee/' + images_rocklee[r] + '.png'
}
//variable de l'ordi (parametre g = gaara)
var Gaarachoice = (g) =>{
    gaara.src = 'images/gaara/' + images_gaara[g] + '.png'
}
//===POur creer le RANDOM !
//math.floor =  arrondir le math.random qui est normalement à virgule
function attaque() {
    Gaarachoice(Math.floor(Math.random() * 2))
    Rockleechoice(0)
    compareSkills()
}
function defendre() {
    Gaarachoice(Math.floor(Math.random() * 2))
    Rockleechoice(1)
    compareSkills()
}
//FOnction pour comparer les degats
var compareSkills = () => {
    const totalViesGaara = 6; // total de vie au départ
    const totalViesRocklee = 6; // total de vie au départ

    let viesGaara = totalViesGaara; //variable qui changera au fil du jeu
    let viesRocklee = totalViesRocklee; //variable qui changera au fil du jeu
    if(rocklee === 0){
        if(gaara == 0){
            viesRocklee --; 
            viesGaara --;
            // perte de vie pour les deux
        }
        else if (gaara == 1){
            viesRocklee --;// perte de vie rock lee
        }
    if(rocklee === 1){
            if(gaara == 0){
                viesGaara --;// perte de vie gaara
            }
            else if (gaara == 1){
                console.log('match nul');// rien ne se passe
            }
        }
    }
    //fonction pour le nombre de vie
//=====NOs coeur plein pour ROCK LEE
const actualiseCoeursRocklee = (viesRocklee) => {
    viesrocklee.innerHTML = '';
    let tableauDeViesRL = [];
    for(let i = 0; i < viesRocklee; i++) {
        tableauDeViesRL.push(coeurPlein);
    }
//Nos coeur vide
    for(let i = 0; i < totalViesRocklee - viesRocklee; i++) {
        tableauDeViesRL.push(coeurVide);
    }
//AJouter dans le code HTML 
    tableauDeViesRL.forEach(coeur => {
        viesrocklee.innerHTML += coeur;
    })
}
 //====NOs coeur plein pour GAARA
 const actualiseCoeursGaara = (viesGaara) => {
   viesgaara.innerHTML = '';
     let tableauDeViesG = [];
    for(let i = 0; i < viesGaara; i++) {
        tableauDeViesG.push(coeurPlein);
   }
// //Nos coeur vide
     for(let i = 0; i < totalViesGaara - viesGaara; i++) {
        tableauDeViesG.push(coeurVide);
    }
// //AJouter dans le code HTML 
    tableauDeViesG.forEach(coeur => {
        viesgaara.innerHTML += coeur;
   })
}
actualiseCoeursGaara(viesGaara); //POur le debut du jeu
actualiseCoeursRocklee(viesRocklee); //POur le debut du jeu
}
    
    //===Bouton pour rejouer , pour relancer la page
    rejouerBtn.addEventListener('click', () => {
        message.style.display = 'none'; //enlever le message
        document.location.reload(true);
    })//fin de compareSkills


