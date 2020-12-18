// *------= Start Button =------* \\

const start = document.getElementById("start")
start.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("we goin")
})

// *------= Random Pattern By Increments =------* \\

// const themButtons = document.getElementsByClassName("option")
// let boxOButtons = []
// boxOButtons.push(themButtons.length)
// console.log(boxOButtons)
// console.log(Math.floor(Math.random(boxOButtons.length)))
//create start button to iniate random sequence
//on hitting start, get one button to initiate 

let boxOButtons = [
    topLeft,
    topRight,
    botLeft,
    botRight
]

randoButton = boxOButtons[Math.floor(Math.random()*boxOButtons.length)]
console.log(randoButton)
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

// *------= Reset Button =------* \\

//Button that clears let userInputArr = []

const reset = document.getElementById("reset")
reset.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("we done")
})
