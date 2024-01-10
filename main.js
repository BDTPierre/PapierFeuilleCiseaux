// Faire un shifumi contre l'utilisateur

let shifumi = ["Pierre", "Feuille", "Ciseaux"]
let index = Math.floor(Math.random() * shifumi.length);
// console.log(index)
let robot = shifumi[index]
// console.log(robot)
let annuler = window.confirm ("Voulez-vous jouer?")

function replay() {

if (annuler === true){
    let player = window.prompt("Choisissez entre Pierre, Feuille, Ciseaux");
    let check = shifumi[shifumi.indexOf(player)]
    while (player !== check || annuler === false) {
        alert ("Veuillez choisir entre Pierre, Feuille, Ciseaux, s'il vous plaît")
        // annuler = window.confirm ("Voulez-vous jouer?")
        player = window.prompt("Choisissez entre Pierre, Feuille, Ciseaux") 
        check = shifumi[shifumi.indexOf(player)]
    }

if (player === robot) {
    alert ("Vous avez une égalité, dommage!");
    } else if ((player === "Pierre" && robot === "Ciseaux") || (player === "Ciseaux" && robot === "Feuille") || (player === "Feuille") && (robot === "Pierre")) {
        alert ("Bravo, vous avez gagné!");
        } else {
            alert ("Dommage, vous avez perdu");
            }

let infoplayer = window.confirm("Veux-tu rejouer ?")
if(infoplayer === true){
    replay ()
    } else {
        alert("Merci d'avoir joué !") 
    }

} else {
    alert("Aurevoir!")
}
}

replay()
