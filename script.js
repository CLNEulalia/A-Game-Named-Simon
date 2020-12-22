// *------= Store User Input =------* \\

let userInputArr = [] // where the user input is stored

// *------= Independant Buttons =------* \\

const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topLeft) //pushes to user input's array
    checkWinCondition()
})

const topRight = document.querySelector("#buttonTwo")
topRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topRight) //pushes to user input's array
    checkWinCondition()
})

const botLeft = document.querySelector("#buttonThree")
botLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botLeft) //pushes to user input's array
    checkWinCondition()
})

const botRight = document.querySelector("#buttonFour")
botRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botRight) //pushes to user input's array
    checkWinCondition()
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
    randoButtonArr.push(randoButton) //pushes to the random array
    lightEmUp(randoButtonArr) //runs the light up function
})

let buttColor = { //button colors are referenced in lightEmUp funciton for flash effect
    buttonOne: { //red
        backgroundColor: "rgb(199, 0, 0)",
        boxShadow: "0px 0px 20px 9px rgba(226, 58, 58, 0.83)",
        transform: "translateY(4px)"
    },
    buttonTwo: { //blue
        backgroundColor: "rgb(0, 0, 199)",
        boxShadow: "0px 0px 20px 9px rgba(44, 50, 240, 0.75)",
        transform: "translateY(4px)"
    },
    buttonThree: { //green
        backgroundColor: "rgb(0, 134, 0)",
        boxShadow: "0px 0px 20px 9px rgba(54, 242, 54, 0.83)",
        transform: "translateY(4px)"
    },
    buttonFour: { //yellow
        backgroundColor: "rgb(204, 204, 0)",
        boxShadow: "0px 0px 20px 9px rgba(238, 235, 45, 0.75)",
        transform: "translateY(4px)"
    }
}

function lightEmUp(lightsArr) {
    let i = 0
    lightsArr.forEach(async(item) => { //(item) -the current item being iterated
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
            item.style.boxShadow = buttColor[item.id].boxShadow; //flash effect
            item.style.backgroundColor = buttColor[item.id].backgroundColor;
            setTimeout(() => {
                item.style.boxShadow = "0 9px rgb(155, 153, 153)"; //return to default
                item.style.backgroundColor = buttColor[item.id].backgroundColor;
                }, 0250*lightsArr.length)
            }, 1000*i)
            i++
        }) 
    })
}

// *------= Reset ALL Button =------* \\

const reset = document.getElementById("reset")
reset.addEventListener("click", event => clearBoard(event)) // calls up siekULost function

function clearBoard(event) {
    if (event) {event.preventDefault()}
    userInputArr.length = 0 //Button that "clears" by setting userInputArr = []
    randoButtonArr.length = 0 // ^^
    gameOver.style.opacity = "0%" // hides the game over event
}

// *------= Gave Over Event =------* \\

function sikeULost(event) { //is now accessible errwhere
        if (event) {event.preventDefault();} // "if (event)" is a null check. if it aint broke, it ok
        gameOver.style.opacity = "100%"
        document.getElementById("gameOver").innerHTML = `Game Over! You Complete ${randoButtonArr.length -= 1} Levels!`
}

// *------= Comparison Check =------* \\

// else sikeULost(event) < --fucntion
//REPEAT onClick listener (proceed to next level)
// extract CALLBACK from const reset --> make function

const gameOver = document.querySelector("#gameOver") //gameover text

function checkWinCondition() {
    if (userInputArr.length !== randoButtonArr.length) return // listener that checks 1) has user click.length = randoButtonArr.length
    if (arrayEquals(userInputArr, randoButtonArr)) { //if userInputArr === randoButtonArr then generate new random iteration inside randoButtonArr
        randoButtonArr.push(boxOButtons[Math.floor(Math.random()*boxOButtons.length)])
        userInputArr = []
        lightEmUp(randoButtonArr) // invoke lightEmUp funciton for randoButtonArr
    } else {
        sikeULost(null)
}}

//*------= Helper Function For Comparison Check =------*\\
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
