console.log("Swiggity swooty, Simon's on duty")
/*
<div class="option" id="buttonOne"> // TOP LEFT - (Red)
<div class="option" id="buttonTwo"> // TOP RIGHT - (Blue)
<div class="option" id="buttonThree"> // BOTTOM LEFT - (Green)
<div class="option" id="buttonFour"> // BOTTOM RIGHT - (Yellow)

button background defuault rgb(235, 235, 235)

*/

// *------= Top Left Button BLINK(?) Red =------*

const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked TL")

})

const topRight = document.querySelector("#buttonTwo")
topRight.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked TR")
})

const botLeft = document.querySelector("#buttonThree")
botLeft.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked BL")
})

const botRight = document.querySelector("#buttonFour")
botRight.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked BR")
})
