console.log("Simon says, 'STFU'")
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
    topLeft.style.background = "red"
    // topLeft.classList.toggle = "active"    
    // topLeft.style.background = "initial"
    //upon click, set color to default
})

const topRight = document.querySelector("#buttonTwo")
topRight.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked TR")
    topRight.style.background = "blue"
})

const botLeft = document.querySelector("#buttonThree")
botLeft.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked BL")
    botLeft.style.background = "green"
})

const botRight = document.querySelector("#buttonFour")
botRight.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked BR")
    botRight.style.background = "yellow"
})
