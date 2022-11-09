var bluecar = document.getElementById("bluecar");
var mycar = document.getElementById("mycar");
var result = document.getElementById("result");
var mycar = document.getElementById("mycar");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0



// blue car lane Change
bluecar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 8)) * 100);
    bluecar.style.left = random + "px";
    counter++
    score.innerHTML = `Your Score: ${counter}`
})


// mycar movement
//right movement
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var mycarmove = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"))
        if (mycarmove < 880) { mycar.style.left = (mycarmove + 100) + "px" }
        //  jumpsound.play()
    };
//left movement
    if (e.keyCode == "37") {
        var mycarmove = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"))
        if (mycarmove > 0) {
            mycar.style.left = (mycarmove - 100) + "px"
            //  jumpsound.play()
        }
    }
})


// game over
setInterval(function gameover() {
    var bluecarleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
    var bluecartop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var mycarleft = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"))

    console.log(bluecarleft)
    console.log(mycarleft)
    console.log(bluecartop)
    if ((bluecarleft === mycarleft) && (bluecartop > 590)) {
        result.style.display = "block";
        counter++
        score.innerHTML = `Your Score: ${counter}`
        game.style.display = "none";
        
        counter = 0;

    }
}, 100)


