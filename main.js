//===Fonction pour changer le Background image
function terrain(){
    const images = ['url("images/arene.jpg")', 'url("images/terrain_de_Konoha.png")', 'url("images/terrain_de_Suna.png")'];
    const ecranjeu = document.getElementById('ecranjeu');
    const bg = images[Math.floor(Math.random() * 3)];
    ecranjeu.style.backgroundImage = bg;
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
//===Fonction pour le jeu










//declare les variable des boutons 
//declare les variable des images
var Gaara_start = document.querySelector('.Gaara_start')
var Rocklee_start = document.querySelector('.Rocklee_start')
//declare les variable des scores 
var Gaara_scoreSpan = document.getElementById('Gaara_score')
var Rocklee_scoreSpan = document.getElementById('Rocklee_score')
//declare les variable des resultats scores 
var Gaara_score = 0
var Rocklee_score = 0
//déclarer le tableau d'élément [0,1]
var images_optionGaara = ['attaquer', 'defendre']
var images_optionRocklee = ['attaquer', 'defendre']
//j'ai donné le parametre à Pchoice de (i) puis concatener les images 'images/' + la var du tableur + png
//variable de GAARA (ordi)
var Gaara_choice = (g) =>{
     Gaara_start.src = 'images/gaara/' + images_optionGaara[g] + '.png'
     Gaara_start.value = images_optionGaara[g]
 }
//variable ROCKLEE (joueur)
var Rocklee_choice = (r) =>{
    Rocklee_start.src = 'images/rocklee/' + images_optionRocklee[r] + '.png'
    Rocklee_start.value = images_optionRocklee[r]
    compareSkills()
}
//math.floor =  arrondir le math.random qui est normalement à virgule
function attaquer() {
     Gaara_choice(Math.floor(Math.random() * 2))
     Rocklee_choice(0)
 }
function defendre() {
    Gaara_choice(Math.floor(Math.random() * 2))
    Rocklee_choice(1)
 }
//FOnction pour comparer les skills des joueurs
var compareSkills = () => {
    if(Rocklee_start.value == 'attaquer'){
        if(Gaara_start.value == 'defendre'){
            Gaara_score += 1
            Rocklee_score -= 1
        }
        else if (Gaara_start.value == 'attaquer'){
            Gaara_score += 1
            Rocklee_score += 1
        }
    }
    if(Rocklee_start.value == 'defendre'){
        if(Gaara_start.value == 'defendre'){
            Gaara_score += 1
            Rocklee_score += 1
        }
        else if (Gaara_start.value == 'attaquer'){
            Rocklee_score += 1
            Gaara_score -= 1
        }
    }
    Rocklee_scoreSpan.textContent = Rocklee_score
    Gaara_scoreSpan.textContent = Gaara_score
}