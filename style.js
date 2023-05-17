const pwd1 = document.querySelector("#password1")
const pwd2 = document.querySelector("#password2")
const span = document.querySelector("span")
const progress = document.querySelector(".progress-bar")
const btnValider = document.querySelector("#submitButton")


/*Pour afficher la barre de vie*/
pwd1.addEventListener("keyup", checkPassword)
pwd2.addEventListener("keyup", checkPassword)


function checkPassword() {
  const longueurMdp1 = pwd1.value.length
  const longueurMdp2 = pwd2.value.length
  const valeurMdp1 = pwd1.value
  const valeurMdp2 = pwd2.value

  if (longueurMdp1 <= 6) {
    span.textContent = "Faible"
    progress.style.width = "10%"
    progress.style.backgroundColor = "red"
  }
  if (longueurMdp1 >= 7 && longueur <= 10) {
    span.textContent = "Modéré"
    progress.style.width = "50%"
    progress.style.backgroundColor = "orange"
  }
  else if (longueurMdp1 > 11) {
    span.textContent = "Fort"
    progress.style.width = "100%"
    progress.style.backgroundColor = "lime"
  }
  console.log(valeurMdp1)

  if (longueurMdp1 == longueurMdp2) {

    if (valeurMdp1 == valeurMdp2) {
      console.log("C'EST BON🎉")
    } else { console.warn("PAS IDENTIQUE") }
  }
}