let namestart = prompt("Write your name to start game");
let agestart = prompt("Write your age");
let colorstart = prompt("What's your favorite color?");
let myColor = "purple";


//Initial reference for User input settings
class User {
    name;
    age;
    color;

    constructor (name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

const firstUser = new User (namestart, agestart, colorstart );

console.log(`Welcome ${firstUser.name}!! Wow, so you're ${firstUser.age}? That's a great age to be!`);
let answer = prompt("Now, can you guess my favorite color? You only get one chance!").toLocaleLowerCase();

if (answer === myColor){
    console.log(`Correct!! But don't worry, I also think ${firstUser.color} is a beautiful color. Now just wait 10 sec to start the game.`);
} else {
    console.log(`Wrong answer. You think, ${firstUser.color} is better than any other color? Now just wait 10 sec to start the game`)
}


//Early timer settings for game
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


//Function to start after timer ends.
function message () {
    const question = prompt(`Wait a second ${firstUser.name}!! Before starting the game, help me with one thing... what day is it today?`).toLocaleLowerCase();
    const day = new Date().toLocaleDateString("en-EN", {weekday: "long"}).toLocaleLowerCase();

    if (question == day) {  
        console.log(`You're right! Today is ${day}, I don't know why some other people tried to give me the full date when all i asked was the day lol. Anyways... Press the wasd keys to move the beautiful rectangle`) }
        else {
            console.log(`Mmm... are you sure that's the correct answer to my question?... Today is ${day}... anyways, now try moving the wasd keys to see something never seen before.`)
        }

    
}
setTimeout(message,10000);


//Initial statemens for rectangle/player
let player = document.querySelector("#player");
let move = 3;
let x = 100;
let y = 250;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;


//Key bindings for recangle/player.
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let lastKey = '';

//Pressing keys actions
window.addEventListener ("keydown", (event) => {
    switch (event.key) {
        case "d":
            if (event.key === "d") {
                rightPressed = true;
                lastKey = "d"
                x += move;
                player.style.left = x +"px";
            }
        break;
        case "a": 
            if (event.key === "a") {
                lefftPressed = true;
                lastKey = "a"
                x -= move;
                player.style.left = x +"px";
            }
        break;
        case "s":
            if (event.key === "s") {
                downPressed = true;
                lastKey = "s"
                y += move;
                player.style.top = y +"px";
            }
        break;
        case "w":
            if (event.key === "w") {
                upPressed = true;
                lastKey = "w"
                y -= move;
                player.style.top = y +"px";
            }
        break;
        default:
            console.log("invalid input");
    }
})

//Releasing keys actions
window.addEventListener ("keyup", (event) => {
    switch (event.key) {
        case "d":
            if (event.key === "d") {
                rightPressed = false;
                console.log ("Moving to right no more")
            }
        break;
        case "a": 
            if (event.key === "a") {
                lefftPressed = false;
                console.log ("You stopped going left!")
            }
        break;
        case "s":
            if (event.key === "s") {
                downPressed = false;  
                console.log ("Wont keep moving down")
            }
        break;
        case "w":
            if (event.key === "w") {
                upPressed = false;
                console.log ("This stops your up journey.")
            }
        break;
        default:
            console.log("invalid input");
    }
})

