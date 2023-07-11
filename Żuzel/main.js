import { pole } from "./modules/pole.js";
import { Player } from "./modules/player.js";
let player = new Player
function pomocnicza2() {
    let pl1 = document.getElementById("pl1").value//1 dodaje 0 nie
    let pl2 = document.getElementById("pl2").value
    let pl3 = document.getElementById("pl3").value
    let pl4 = document.getElementById("pl4").value
    let a1 = document.getElementById("1a").value
    let a2 = document.getElementById("1b").value
    let b1 = document.getElementById("2a").value
    let b2 = document.getElementById("2b").value
    let c1 = document.getElementById("3a").value
    let c2 = document.getElementById("3b").value
    let d1 = document.getElementById("4a").value
    let d2 = document.getElementById("4b").value
    // console.log(pl1, pl2, pl3, pl4)
    function pomocnicza(pl1, pl2, pl3, pl4, a, b, c, d, e, f, g, h) {
        if (pl1 == 1) {
            player.move(a, b, "red")
        }
        if (pl2 == 1) {
            player.move(c, d, "blue")
        }
        if (pl3 == 1) {
            player.move(e, f, "green")
        }
        if (pl4 == 1) {
            player.move(g, h, "yellow")
        }
    }
    pomocnicza(pl1, pl2, pl3, pl4, a1, a2, b1, b2, c1, c2, d1, d2)
}
document.getElementById("start").addEventListener("click", function () {
    pole(pomocnicza2)
})
var canvas = document.getElementById("myCanvas")
document.body.appendChild(canvas)