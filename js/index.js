import Swal from 'sweetalert2';
window.Swal = require('sweetalert2');

//Intructions pop up
let instructionsBtn = document.querySelector ('#instructionsBtn');

instructionsBtn.onclick = () => {
    Swal.fire ({
        text: "Move the player using the WASD keys. In the meantime move to reach the coin... (Still unable to win until I learn how to code collisions c:)",
        confirmButtonText: "Accept",
        confirmButtonColor: "#a7c957",
    })
}

//Name input pop up at game start and timer start 
let startBtn = document.querySelector('#startBtn');
let playerName = document.querySelector('.playerName');
let remainingTime = document.querySelector("#remainingTime");
let secondsLeft = 10;

startBtn.onclick = () => {
    Swal.fire ({
        text: "Please write your name",
        confirmButtonText: "Start",
        confirmButtonColor: "#a7c957",
        input: "text"
    }).then (answer => {
        if (answer.isConfirmed) {
            Swal.fire ({
                text: "Welcome " + answer.value + ". You can start moving now!",
                confirmButtonColor: "#a7c957"
            }).then (answer2 => {
                if (answer2.isConfirmed) {
                    localStorage.setItem("playerName", JSON.stringify(answer));
                    localStorage.getItem('playerName');
                    
                    const downloadTimer = setInterval( () => {
                            if (secondsLeft <= 0) clearInterval(downloadTimer)
                            remainingTime.value = secondsLeft
                            remainingTime.textContent = secondsLeft
                            secondsLeft -= 1
                        }, 1000)
                }
            })
        }
})
}

//Player controls
let player = document.querySelector(".player");
let coins = document.querySelector(".coins");

let move = 35;
let x = -10;
let y = -28;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let lastKey = '';

//Pressing keys actions
startBtn.addEventListener ("keydown", (event) => {
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
                leftPressed = true;
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
    }
})

//Releasing keys actions
startBtn.addEventListener ("keyup", (event) => {
    switch (event.key) {
        case "d":
            if (event.key === "d") {
                rightPressed = false;
            }
        break;
        case "a": 
            if (event.key === "a") {
                leftPressed = false;
            }
        break;
        case "s":
            if (event.key === "s") {
                downPressed = false;  
            }
        break;
        case "w":
            if (event.key === "w") {
                upPressed = false;
            }
    }
})

