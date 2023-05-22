let btnAttackGoku = document.querySelector("#attackGoku")
let btnHealGoku = document.querySelector("#healGoku")
let barreDeVieGoku = document.querySelector("#vieGoku")
let btnAttackVegeta = document.querySelector("#attackVegeta")
let btnHealVegeta = document.querySelector("#healVegeta")
let barreDeVieVegeta = document.querySelector("#vieVegeta")

console.log(btnAttackGoku)

btnAttackGoku.addEventListener("click",attackAleatoireGoku)
btnAttackVegeta.addEventListener("click",attackAleatoireVegeta)
btnHealGoku.addEventListener("click",healAleatoireGoku)
btnHealVegeta.addEventListener("click",healAleatoireVegeta)

let vieGoku = 100
let vieVegeta = 100
let player1 = "goku"
let player2 = "vegeta"
let currentPlayer = "goku"



function updateLifeVegeta(nbAleatoire){
  vieVegeta = vieVegeta - nbAleatoire
  barreDeVieVegeta.style.width = vieVegeta+ "%"
  console.log(vieVegeta)
}

function updateLifeGoku(nbAleatoire){
  vieGoku = vieGoku - nbAleatoire
  barreDeVieGoku.style.width = vieGoku+ "%"
  console.log(vieGoku)
}


function attackAleatoireGoku(){
  if(vieVegeta <= 0){
    barreDeVieVegeta.textContent = "K.O"
    btnAttackGoku.disabled = true
  }
  let nbAleatoire = Math.floor(Math.random()*10)
  console.log("Végéta perd"+" "+ nbAleatoire+ " "+"PV")
  updateLifeVegeta(nbAleatoire)
  currentPlayer = "vegeta"
  checkTurn()
}

function attackAleatoireVegeta(){
  if(vieGoku <= 0){
    barreDeVieGoku.textContent = "K.O"
    btnAttackVegeta.disabled = true
  }
  let nbAleatoire = Math.floor(Math.random()*10)
  console.log("Goku perd"+" "+nbAleatoire+" "+"PV")
  updateLifeGoku(nbAleatoire)
  currentPlayer = "goku"
  checkTurn()


}
 


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

function healVegetaLife(chiffreAl){
  vieVegeta = vieVegeta + chiffreAl
  barreDeVieVegeta.style.width = vieVegeta + "%"
  console.log(vieVegeta)


}

function healGokuLife(chiffreAl){
  vieGoku = vieGoku + chiffreAl
  barreDeVieGoku.style.width = vieGoku + "%"
  console.log(vieGoku)
}


function healAleatoireGoku(){
  if(vieGoku >= 100){
    barreDeVieGoku.textContent = "FULL"
    btnHealGoku.disabled = true
  }
  let chiffreAl = Math.floor(Math.random()*5)
  healGokuLife(chiffreAl)
  console.log("Goku se régénère de"+" "+ chiffreAl+ " "+"PV")
  currentPlayer = "vegeta"
  checkTurn()
}


function healAleatoireVegeta(){
  if(vieVegeta >= 100){
    barreDeVieVegeta.textContent = "FULL"
    btnHealVegeta.disabled = true
  }
  let chiffreAl = Math.floor(Math.random()*5)
  healVegetaLife(chiffreAl)
  currentPlayer = "goku"
  checkTurn()
  console.log("Végéta se régénère de"+" "+chiffreAl+" "+"PV")
  
}

