console.log("Swiggity swooty, Simon's on duty")
/*
<div class="option" id="buttonOne"> // TOP LEFT - (Red)
<div class="option" id="buttonTwo"> // TOP RIGHT - (Blue)
<div class="option" id="buttonThree"> // BOTTOM LEFT - (Green)
<div class="option" id="buttonFour"> // BOTTOM RIGHT - (Yellow)

button background defuault rgb(235, 235, 235)

*/

// *------= Clicky ALL Buttons?? =------*

const themButtons = document.getElementsByClassName("option")

const boxOButtons = []

// *------= For Loop buttons -> Array =------*

for (let i=0; i<themButtons.length; i++) {
    themButtons[i].addEventListener("click", (event) => {
        event.preventDefault()
        console.log("clicky clicky")
    })
}

// *------= use .forEach =------*

// document.querySelectorAll(".options").forEach((themButtons) => {
//     themButtons.addEventListener("click", (event) => {
//         event.preventDefault()
//         console.log(themButtons)
//     })
// })
// *------= Independant Buttons =------*
/*
const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked TL")

})
*/

