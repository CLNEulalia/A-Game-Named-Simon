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
    randoButtonArr.push(randoButton) //pushes to the random array
    // randoButton.currentTarget.style.active = true
    lightEmUp(randoButtonArr)
    console.log(randoButtonArr)
})

//make funciton that hosts randoButtonArr, 


function lightEmUp(lightsArr) {
    lightsArr.forEach((item) => { //(item) -the current item being iterated
        setTimeout(() => {
            item.style.boxShadow = "0px 0px 15px 5px rgba(216, 26, 26, 0.75)";
            item.style.backgroundColor = "red";
            setTimeout(() => {
                item.style.boxShadow = "0 9px rgb(155, 153, 153)";
                item.style.backgroundColor = "rgb(235, 233, 233) ";
            }, 0250)
        }, 1500)
})
}

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