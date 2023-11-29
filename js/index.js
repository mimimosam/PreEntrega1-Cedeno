let namestart = prompt("Write your name to start game");
let myColor = "purple";


console.log(`Welcome ${namestart}!!`);
let answer = prompt(`Hey ${namestart}, can you guess my favorite color? You only get one chance!`).toLocaleLowerCase();

if (answer == myColor){
    console.log("Correct!! How did you guess?? Now just wait 10 sec to start the game.");
} else {
    console.log("Wrong answer. Don't worry, maybe next time. Now just wait 10 sec to start the game")
}

let timer = 0

while (timer <= 10) {
    loop(timer)
    timer++;
}

function loop (timer){
    setTimeout(function(){
        console.log(timer);
    }, 1000 * timer )
}

function message () {
    alert("Just kidding! There's no game yet. For now you can press the wasd keys and see what happens");
}
setTimeout(message,10000);



document.addEventListener("keydown",keyInputs, false);

let rightPressed = false;
let lefftPressed = false;
let upPressed = false;
let downPressed = false;

function keyInputs (event) {
    switch (event.key) {
        case "d":
            if (event.key === "d") {
                rightPressed = true;
                console.log ("We know nothing moved, but you pressed right!")
            }
        break;
        case "a": 
            if (event.key === "a") {
                lefftPressed = true;
                console.log ("Soon you'll see it moving, but for now you pressed left")
            }
        break;
        case "s":
            if (event.key === "s") {
                downPressed = true;
                console.log ("Even if you don't see it we know that you pressed down")
            }
        break;
        case "w":
            if (event.key === "w") {
                upPressed = true;
                console.log ("Would this make you jump? You pressed up")
            }
        break;
        default:
            console.log("invalid input");
    }
}

