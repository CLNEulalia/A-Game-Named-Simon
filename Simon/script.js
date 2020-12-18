// *------= Random Pattern By Increments =------* \\

const themButtons = document.getElementsByClassName("option")
let boxOButtons = []
boxOButtons.push(themButtons.length)
console.log(boxOButtons)
// console.log(Math.floor(Math.random(boxOButtons.length)))

// *------= Store User Input =------* \\

let userInputArr = []

// *------= Independant Buttons =------* \\

const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topLeft)
    console.log(userInputArr)
})

const topRight = document.querySelector("#buttonTwo")
topRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topRight)
    console.log(userInputArr)

})

const botLeft = document.querySelector("#buttonThree")
botLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botLeft)
    console.log(userInputArr)

})

const botRight = document.querySelector("#buttonFour")
botRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botRight)
    console.log(userInputArr)

})

// *------=  =------* \\
