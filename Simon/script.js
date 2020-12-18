
// *------= Store User Input =------*

let userInputArr = []

// *------= Independant Buttons =------*

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



//onEvent//click// pull the value of the item  

// let randomButtons = Math.floor(Math.random(themButtons))
// console.log(randomButtons.length)