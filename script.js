let btnAttackGoku = document.querySelector("#attackGoku")
let btnHealGoku = document.querySelector("#healGoku")
let barreDeVieGoku = document.querySelector("#vieGoku")
let btnAttackVegeta = document.querySelector("#attackVegeta")
let btnHealVegeta = document.querySelector("#healVegeta")
let barreDeVieVegeta = document.querySelector("#vieVegeta")
let imgGoku = document.querySelector("#card-img-goku")
let imgVegeta = document.querySelector("#card-img-vegeta")
console.log(btnAttackGoku)

btnAttackGoku.addEventListener("click",attackAleatoireGoku)
btnAttackVegeta.addEventListener("click",attackAleatoireVegeta)
btnHealGoku.addEventListener("click",healAleatoireGoku)
btnHealVegeta.addEventListener("click",healAleatoireVegeta)

/*audio*/

const atGoku = new Audio (kamehameha.swf.mp3)
const atVegeta= new Audio (vegeta-final-flash.mp3)

/**/


let vieGoku = 100
let vieVegeta = 100
let player1 = "goku"
let player2 = "vegeta"
let currentPlayer = "goku"


/* Fonction qui modifie la taille de la barre de vie de Végéta en fontion des dégats subit */
function updateLifeVegeta(nbAleatoire){
  vieVegeta = vieVegeta - nbAleatoire
  barreDeVieVegeta.style.width = vieVegeta+ "%"
  console.log(vieVegeta)
}

/* Fonction qui modifie la taille de la barre de vie de Goku en fontion des dégats subit */
function updateLifeGoku(nbAleatoire){
  vieGoku = vieGoku - nbAleatoire
  barreDeVieGoku.style.width = vieGoku+ "%"
  console.log(vieGoku)
}

/* Fonction qui permet à Goku d'attaquer Végéta et lui enlève des pv */
function attackAleatoireGoku(){
  if(vieVegeta <= 0){
    barreDeVieVegeta.textContent = "K.O"
    btnAttackGoku.disabled = true
  }else{
    let nbAleatoire = Math.floor(Math.random()*20)
    console.log("Végéta perd"+" "+ nbAleatoire+ " "+"PV")
    updateLifeVegeta(nbAleatoire)
    currentPlayer = "vegeta"
    checkTurn()
    lifeBarColor()
  }
 
}

/* Fonction qui permet à Végéta d'attaquer Goku et lui enlève des pv */ 
function attackAleatoireVegeta(){
  if(vieGoku <= 0){
    barreDeVieGoku.textContent = "K.O"
    btnAttackVegeta.disabled = true
  }else{
    let nbAleatoire = Math.floor(Math.random()*20)
    console.log("Goku perd"+" "+nbAleatoire+" "+"PV")
    updateLifeGoku(nbAleatoire)
    currentPlayer = "goku"
    checkTurn()
    lifeBarColor2()
  }


}
 
/* Fonction qui permet le tour à tour*/
function checkTurn(){
  if(currentPlayer == player1){
    btnAttackVegeta.disabled = true
    btnHealVegeta.disabled = true
    btnAttackGoku.disabled = false
    btnHealGoku.disabled = false
  }
  if(currentPlayer == player2){
    btnAttackGoku.disabled = true
    btnHealGoku.disabled = true
    btnAttackVegeta.disabled = false
    btnHealVegeta.disabled = false 
  }
  console.log('tour de ',currentPlayer)

}

checkTurn()

/* Fonction qui permet à barre de vie Végéta d'augmenter en fonction du nb généré */
function healVegetaLife(chiffreAl){
  vieVegeta = vieVegeta + chiffreAl
  barreDeVieVegeta.style.width = vieVegeta + "%"
  console.log(vieVegeta)


}

/* Fonction qui permet à barre de vie Goku d'augmenter en fonction du nb généré */
function healGokuLife(chiffreAl){
  vieGoku = vieGoku + chiffreAl
  barreDeVieGoku.style.width = vieGoku + "%"
  console.log(vieGoku)
}

/* Fonction qui permet à Goku de se soigner en générant un nb aléatoire */
function healAleatoireGoku(){
  if(vieGoku >= 100){
    barreDeVieGoku.textContent = "FULL"
    btnHealGoku.disabled = true
  }else{
    let chiffreAl = Math.floor(Math.random()*7)
  healGokuLife(chiffreAl)
  console.log("Goku se régénère de"+" "+ chiffreAl+ " "+"PV")
  currentPlayer = "vegeta"
  checkTurn()
  }
  lifeBarColor2()
}

/* Fonction qui permet à Végéta de se soigner en générant un nb aléatoire*/
function healAleatoireVegeta(){
  if(vieVegeta >= 100){
    barreDeVieVegeta.textContent = "FULL"
    btnHealVegeta.disabled = true
  }else{
    let chiffreAl = Math.floor(Math.random()*7)
  healVegetaLife(chiffreAl)
  currentPlayer = "goku"
  checkTurn()
  console.log("Végéta se régénère de"+" "+chiffreAl+" "+"PV")
  }

  lifeBarColor()
}

/* Modofie la couleur de la barre de vie Végéta en fonction nb pv */
function lifeBarColor(){
  if(vieVegeta <= 75 && vieVegeta >= 50){
    barreDeVieVegeta.style.backgroundColor = "yellow"
    imgVegeta.src = "vegeta_debout.png"
  }
  if(vieVegeta < 50 && vieVegeta >= 25){
    barreDeVieVegeta.style.backgroundColor = "orange"
    imgVegeta.src = "vegeta.fatiguer.png"
  }
  if(vieVegeta < 25){
    barreDeVieVegeta.style.backgroundColor = "red"
    imgVegeta.src = "mort.vegeta.png"
  }
}

/* Modofie la couleur de la barre de vie Goku en fonction nb pv */
function lifeBarColor2(){
  if(vieGoku <= 75 && vieGoku >= 50){
    barreDeVieGoku.style.backgroundColor = "yellow"
    imgGoku.src = "goku_debout.png"
  }
  if(vieGoku < 50 && vieGoku >= 25){
    barreDeVieGoku.style.backgroundColor = "orange"
    imgGoku.src = "goku.fatiguer.png"
  }
  if(vieGoku < 25){
    barreDeVieGoku.style.backgroundColor = "red"
    imgGoku.src = "mort.goku.png"
  }
}
