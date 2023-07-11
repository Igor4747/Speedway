export class Player {
    constructor(klawisz1, klawisz2, x, y) {
        this.klawisz1 = klawisz1;
        this.klawisz2 = klawisz2;
        this.x = x;
        this.y = y;
    }
    move(a, b, color) {
        let pokonane = 0
        let liczbaOkr = 1
        let div = document.createElement("div")
        document.body.appendChild(div)
        div.style.float = "left"
        div.style.padding = "5px"
        div.style.border = "5px solid " + color
        div.style.margin = "5px"
        div.id = color
        div.innerHTML = (pokonane + 1) + " z " + liczbaOkr + " okrążeń"
        let img = document.createElement("img")
        document.body.appendChild(img)
        img.src = "/gfx/" + color + ".png"
        img.style.position = "absolute"
        img.style.width = "40px"
        img.style.height = "40px"
        img.onload = function () {
            var canvas = document.getElementById("myCanvas")
            var ctx = canvas.getContext("2d");
            let angle = 0
            let angle2 = 0
            let kierunek = null
            let kierunekPrawo = null
            let kierunekLewo = null
            document.body.addEventListener("keydown", (e) => {
                if (e.key == a) {
                    kierunekLewo = true
                }
                if (e.key == b) {
                    kierunekPrawo = true
                }
            })
            document.body.addEventListener("keyup", (e) => {
                if (e.key == a) {
                    kierunekLewo = false
                }
                if (e.key == b) {
                    kierunekPrawo = false
                }
            })
            let r = 1
            let dx = null
            let dy = null
            let x = 530
            let y = 350
            let xp = x    //x poczatkowe
            let yp = y    //y poczatkowe
            let winDone = false
            let angleHelp = null
            function collision() {
                if (x < 0 || y < 0 || x > 800 || y > 400) {
                    return true
                }
                if (y > 100 && y < 300 && x > 200 && x < 600) {
                    return true
                }
                let distanceX1 = Math.abs(x - 200) ** 2
                let distanceY = Math.abs(y - 200) ** 2
                let distanceX2 = Math.abs(x - 600) ** 2

                let circleCollision1 = Math.sqrt(distanceY + distanceX1)
                let circleCollision2 = Math.sqrt(distanceY + distanceX2)

                if (circleCollision1 < 100) {
                    return true
                }

                if (circleCollision2 < 100) {
                    return true
                }

                if (x < 200) {
                    if (circleCollision1 > 200) {
                        return true
                    }
                }

                if (x > 600) {
                    if (circleCollision2 > 200) {
                        return true
                    }
                }

            }
            function win() {
                if (x > 529 && x < 530 && y > 299 && y < 401) {
                    pokonane++
                    div.innerHTML = (pokonane + 1) + " z " + liczbaOkr + " okrążeń"
                    winDone = true
                    if (pokonane == liczbaOkr) {
                        div.innerHTML = "gracz " + color + " wygrywa!"
                        window.alert("gracz " + color + " wygrywa!")
                        r = 0
                        winDone = true
                        clearInterval(interwal)
                    }
                }
            }
            function draw() {
                if (kierunekLewo == true) {
                    kierunek = "lewo"
                    angle += 1
                }
                if (kierunekPrawo == true) {
                    kierunek = "prawo"
                    angle2 += 1
                }
                ctx.beginPath()
                ctx.moveTo(xp, yp)
                if (kierunek == "prawo") {
                    dx = r * Math.cos(angle2 * Math.PI / 180)
                    dy = r * Math.sin(angle2 * Math.PI / 180)
                    x = xp + dx
                    y = yp + dy
                    angle = 0 - angle2
                }
                else {
                    dx = r * Math.cos(angle * Math.PI / 180)
                    dy = r * Math.sin(angle * Math.PI / 180)
                    x = xp + dx
                    y = yp - dy
                    this.x = x
                    this.y = y
                    angle2 = 0 - angle
                }
                img.style.top = y - 20 + "px"
                img.style.left = x - 20 + "px"
                angleHelp = 360 - angle
                img.style.transform = "rotate(" + angleHelp + "deg)"
                ctx.lineTo(x, y)
                ctx.strokeStyle = color
                ctx.lineWidth = 5;
                ctx.stroke()
                xp = x
                yp = y
                if (collision() == true) {
                    div.innerHTML = "przegrana gracza " + color
                    r = 0
                    clearInterval(interwal)
                }

                if (winDone == false) {
                    win()
                }
                winDone = false
            }
            let interwal = setInterval(draw, 10)
        }
    }

}


