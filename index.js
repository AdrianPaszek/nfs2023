const road = document.getElementById("road");
const scoreCounter = document.getElementById("score");
const car = document.getElementById("my_car");

const roadHeight = road.clientHeight;
const roadWidth = road.clientWidth;
const carHeight = car.clientHeight;
const carWidth = car.clientWidth;

let carPositionX = ( roadWidth - (carWidth/2) ) / 2;
let carPositionY = ( roadHeight - carHeight ) - 15;

let score = 0;
let pressedKeys = {};

const carSpeed = 2;
const enemyCarSpeed = 5;

const enemies_list= [
    "car10.png",
    "car11.png",
    "car12.png",
    "car13.png",
    "car14.png"
]

function enemyCarSpawn() {
    setInterval(() => {
        let enemyCar = document.createElement('div');
        let enemyImage = Math.floor(Math.random() *enemies_list.length)
        let image = enemies_list[enemyImage];
        enemyCar.style.backgroundImage = "url(" + image + ")";
    
        enemyCar.setAttribute('class', 'enemy');
        enemyCar.style.top = 10 + "px";
        enemyCar.style.left = (Math.random() * (roadWidth - carWidth)) + "px";
        enemyCar.style.display = "block";
        road.appendChild(enemyCar)
        let enemyCarMove = setInterval(() => {
            const enemyCarY = enemyCar.offsetTop;
            if (enemyCarY >= roadHeight) {
                score++;
                scoreCounter.textContent = "You have reached: " + score + " Matize's";
                road.removeChild(enemyCar);
                clearInterval(enemyCarMove);
            } else {
                enemyCar.style.top = enemyCar.offsetTop + enemyCarSpeed + "px";
                if (
                    enemyCarY + 100 >= carPositionY &&
                    enemyCarY <= carPositionY + carHeight &&
                    parseInt(enemyCar.style.left) >= carPositionX - carWidth &&
                    parseInt(enemyCar.style.left) <= carPositionX + carWidth
                ) {
                    clearInterval(enemyCarMove);
                    window.alert("Chłopie patrz jak jeździsz! | Wynik: " + score);
                    resetGame()
                }
            }
        }, 10);
    }, 500);
};

document.addEventListener("keydown", function(event) {
    pressedKeys[event.key] = true;
});
document.addEventListener("keyup", function(event) {
    pressedKeys[event.key] = false;
});

function moveCar() {
    if (pressedKeys["ArrowUp"] && pressedKeys["ArrowRight"]) {
        if (carPositionY  < roadHeight-carHeight && carPositionX + carWidth < roadWidth) {
            carPositionX += carSpeed/-3;
            carPositionY -= carSpeed/-3;
        }
    }
    if (pressedKeys["ArrowUp"] && pressedKeys["ArrowLeft"]) {
        if (carPositionY > 0 && carPositionX > 0) {
            carPositionX -= carSpeed/-3;
            carPositionY -= carSpeed/-3;
        }
    }
    if (pressedKeys["ArrowDown"] && pressedKeys["ArrowRight"]) {
        if (carPositionY + carHeight < roadHeight && carPositionX + carWidth < roadWidth) {
            carPositionX += carSpeed/-3;
            carPositionY += carSpeed/-3;
        }
    }
    if (pressedKeys["ArrowDown"] && pressedKeys["ArrowLeft"]) {
        if (carPositionY + carHeight < roadHeight && carPositionX + carWidth < roadWidth) {
            carPositionX -= carSpeed/-3;
            carPositionY += carSpeed/-3;
        }
    }
    if (pressedKeys["ArrowRight"] && carPositionX + carWidth < roadWidth) {
        carPositionX += carSpeed;
    } 
    if (pressedKeys["ArrowLeft"] && carPositionX > 0) {
        carPositionX -= carSpeed;
    } 
    if (pressedKeys["ArrowUp"] && carPositionY > 0) {
        carPositionY -= carSpeed;
    } 
    if (pressedKeys["ArrowDown"] && carPositionY + carHeight < roadHeight) {
        carPositionY += carSpeed;
    }
    car.style.left = carPositionX + "px";
    car.style.top = carPositionY + "px";
    requestAnimationFrame(moveCar);
};

requestAnimationFrame(moveCar);
function startGame() { 
    document.querySelector("#start").style.display = "none";
    scoreCounter.textContent = "Ominąłeś: " + score + " przeciwników Matiza";
    scoreCounter.style.width = "22%";
    enemyCarSpawn();
};

function resetGame() {
    score = 0;
    carPositionX = (roadWidth - carWidth) / 2;
    carPositionY = roadHeight - carHeight - 15;
    let enemyCars = document.getElementsByClassName('enemy');
    while (enemyCars.length > 0) {
        road.removeChild(enemyCars[0]);
    }
    var keys = Object.keys(pressedKeys);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        pressedKeys[key] = false;
    }
    startGame();
}

window.onbeforeunload = function() {
    resetGame();
};