// *------= Store User Input =------* \\

let userInputArr = [] // where the user input is stored

// *------= Independant Buttons =------* \\

const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topLeft) //pushes to user input's array
    console.log(userInputArr)
})

const topRight = document.querySelector("#buttonTwo")
topRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topRight) //pushes to user input's array
    console.log(userInputArr)

})

const botLeft = document.querySelector("#buttonThree")
botLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botLeft) //pushes to user input's array
    console.log(userInputArr)

})

const botRight = document.querySelector("#buttonFour")
botRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botRight) //pushes to user input's array
    console.log(userInputArr)

})

// *------= Computer Generated Random Interation Incrementer Array =------* \\

const boxOButtons = [ // where the computer chooses its random interation from
    topLeft,
    topRight,
    botLeft,
    botRight
]

let randoButtonArr = [] // where the random sequence is stored

const start = document.getElementById("start") //start button
start.addEventListener("click", (event) => {
    event.preventDefault();
    let randoButton = boxOButtons[Math.floor(Math.random()*boxOButtons.length)]
    randoButtonArr.push(randoButton) //pushes to the random arra
    console.log(randoButtonArr)
    return new Promise((resolve, reject) => {
        option.className += " active"
        setTimeout (() => {
            option.className = option.classname.replace(" active", "")
            resolve()
        }, 1000)
    })
    
    const main = async () => {
        for (let option of start) {
            await flash(option)
        }
    }
})
//incorporte setTimeout(function() {what you want to happen;}, milliseconds ) to initiate the start of the game


// *------= Reset ALL Button =------* \\

const reset = document.getElementById("reset")
reset.addEventListener("click", (event) => {
    event.preventDefault();
    userInputArr.length = 0 //Button that "clears" by setting userInputArr = []
    randoButtonArr.length = 0
    console.log(userInputArr, randoButtonArr)
    console.log("we done")
})

//make a promise of BUTTONS

// return new Promise((resolve, reject) => {
//     option.className += " active"
//     setTimeout (() => {
//         option.className = option.classname.replace(" active", "")
//         resolve()
//     }, 1000)
// })

// const main = async () => {
//     for (let option of start) {
//         await flash(option)
//     }
// }