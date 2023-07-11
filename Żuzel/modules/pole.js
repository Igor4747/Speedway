export function pole(callback) { 
    var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d");
    // fill2 = "green";
    let fill1 = "white";
    let img = new Image;
    img.src = 'gfx/trawa.jpeg'
    img.onload = function () {
        let fill2 = ctx.createPattern(img, "repeat")
        ctx.beginPath();
        ctx.fillStyle = fill2
        ctx.fillRect(0, 0, 800, 400)
        ctx.fillStyle = fill1
        ctx.fillRect(200, 0, 400, 100)
        ctx.fillStyle = fill1
        ctx.fillRect(200, 300, 400, 100)
        ctx.arc(200, 200, 200, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.fillStyle = fill1
        ctx.fill();
        ctx.moveTo(200, 400);
        ctx.lineTo(600, 400);
        ctx.moveTo(600, 0);
        ctx.arc(600, 200, 200, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.fillStyle = fill1
        ctx.fill();
        ctx.moveTo(600, 0);
        ctx.lineTo(200, 0);
        ctx.strokeStyle = "black"
        ctx.lineWidth = 5;
        ctx.stroke()
        //mniejsze pole
        ctx.beginPath();
        ctx.moveTo(200, 300);
        ctx.arc(200, 200, 100, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.fillStyle = fill2
        ctx.fill();
        ctx.moveTo(200, 300);
        ctx.lineTo(600, 300);
        ctx.moveTo(600, 100);
        ctx.arc(600, 200, 100, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.fillStyle = fill2
        ctx.fill();
        ctx.moveTo(600, 100);
        ctx.lineTo(200, 100);
        ctx.strokeStyle = "black"
        ctx.lineWidth = 5;
        ctx.stroke()
        ctx.moveTo(530,300)
        ctx.lineTo(530,400)
        ctx.stroke()
        callback();
    }
}
