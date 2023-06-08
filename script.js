const car = document.querySelector("#car")
const start = document.querySelector(".start")
const vst = document.querySelector("#vst")
const vst2 = document.querySelector("#vst2")
const vst3 = document.querySelector("#vst3")


document.addEventListener("keydown", function(event) {
    if (event.key == 'ArrowLeft') {
        carLeft()
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key == 'ArrowRight') {
        carRight()
    }
})

start.addEventListener('click', startGame)

function carLeft () {
    if (car.classList != "car_right") {
        car.classList.add("car_left")
    } else
    car.classList.add("car_left2")
    car.classList.remove("car_right")
    setTimeout (function() {
        car.classList.remove("car_left2")
    }, 350) 
}

function carRight () {
    if (car.classList != "car_left") {
        car.classList.add("car_right")
    } else {
    car.classList.add("car_right2")
    car.classList.remove("car_left")
    setTimeout (function() {
        car.classList.remove("car_right2")
    }, 800) 
    }
}

function startGame() {
    start.classList.add("hidden")
    vst.classList.add("movement")
    vst2.classList.add("movement2")
    vst3.classList.add("movement3")
    crash()
}
function crash() {
let crash = setInterval(function(){
    let car1 = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
    let car2 = parseInt(window.getComputedStyle(vst).getPropertyValue("top"))
    let car3 = parseInt(window.getComputedStyle(vst2).getPropertyValue("top"))
    let car4 = parseInt(window.getComputedStyle(vst3).getPropertyValue("top"))
    if ((car1 < 45 && car2 > 250 && car2 < 455 
        || (car1 > 55 && car1 < 150 && car3 > 250 && car3 < 455) ||
         (car1 > 155 && car4 > 250 && car4 < 455))) {
        
        car.removeAttribute('calss')
        vst.removeAttribute('class')
        vst2.removeAttribute('class')
        vst3.removeAttribute('class')
        start.classList.remove("hidden")
        clearInterval(crash)
    } 
}, 10)
}
