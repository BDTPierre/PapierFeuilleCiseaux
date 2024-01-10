// Faire un shifumi contre l'utilisateur

function replay() {

let shifumi = ["Pierre", "Feuille", "Ciseaux"]
let index = Math.floor(Math.random() * shifumi.length);
console.log(index)
let robot = shifumi[index]
console.log(robot)
let player = window.prompt("Choisissez entre Pierre, Feuille, Ciseaux");
console.log(player)
        
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
}

replay()
