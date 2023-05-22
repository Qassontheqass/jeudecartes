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


function updateLifeVegeta(nbAleatoire){
  vieVegeta = vieVegeta - nbAleatoire
  barreDeVieVegeta.style.width = vieVegeta+ "%"
  console.log(vieVegeta)
}
console.log(nbAleatoire)

function updateLifeGoku(nbAleatoire){
  vieGoku = vieGoku - nbAleatoire
  barreDeVieGoku.style.width = vieGoku+ "%"
  console.log(vieGoku)
}
console.log(nbAleatoire)


function attackAleatoireGoku(){
  if(vieVegeta <= 0){
    barreDeVieVegeta.textContent = "K.O"
  }
  let nbAleatoire = Math.floor(Math.random()*10)
  console.log(nbAleatoire)
  updateLifeVegeta(nbAleatoire)
}

function attackAleatoireVegeta(){
  if(vieGoku <= 0){
    barreDeVieGoku.textContent = "K.O"
  }
  let nbAleatoire = Math.floor(Math.random()*10)
  console.log(nbAleatoire)
  updateLifeGoku(nbAleatoire)


}

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
  }if(vieGoku<100){
    btnHealGoku.disabled = false
  }
  let chiffreAl = Math.floor(Math.random()*5)
  healGokuLife(chiffreAl)
  console.log(chiffreAl)
}


function healAleatoireVegeta(){
  if(vieVegeta >= 100){
    barreDeVieVegeta.textContent = "FULL"
    btnHealVegeta.disabled = true
  }
  let chiffreAl = Math.floor(Math.random()*5)
  healVegetaLife(chiffreAl)
  console.log(chiffreAl)
  
}

