//declare les variables des images
var rocklee = document.querySelector('.rocklee')
var gaara = document.querySelector('.gaara')
//déclarer le tableau d'élément [0,1]
var images_rocklee = ['attaquer', 'defendre']
var images_gaara = ['attaquer', 'defendre']
//j'ai donné le parametre à Rockleechoice de (r) puis concatener les images 'images/' + la var du tableur + png
//variable du Joueur (parametre r = rocklee)
var Rockleechoice = (r) =>{
    rocklee.src = 'images/rocklee/' + images_rocklee[r] + '.png'
}
//variable de l'ordi (parametre g = gaara)
var Gaarachoice = (g) =>{
    gaara.src = 'images/gaara/' + images_gaara[g] + '.png'
}
//Fontion pour jouer
function playGame() {
    document.querySelector('.rocklee').src ="/home/descodeuses/Documents/Projets/Rocklee_Fight/images/rocklee/rocklee1.png";
    document.querySelector('.gaara').src ="/home/descodeuses/Documents/Projets/Rocklee_Fight/images/gaara/gaara1.png";
} 
//POur creer le RANDOM !
//math.floor =  arrondir le math.random qui est normalement à virgule
function attaque() {
    Gaarachoice(Math.floor(Math.random() * 2))
    Rockleechoice(0)
}
function defendre() {
    Gaarachoice(Math.floor(Math.random() * 2))
    Rockleechoice(1)
}

















