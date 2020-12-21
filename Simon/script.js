// *------= Store User Input =------* \\

let userInputArr = [] // where the user input is stored

// *------= Independant Buttons =------* \\

const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topLeft) //pushes to user input's array
    console.log("update userInput", userInputArr)
    checkWinCondition()
})

const topRight = document.querySelector("#buttonTwo")
topRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(topRight) //pushes to user input's array
    console.log("update userInput", userInputArr)
    checkWinCondition()
})

const botLeft = document.querySelector("#buttonThree")
botLeft.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botLeft) //pushes to user input's array
    console.log("update userInput", userInputArr)
    checkWinCondition()
})

const botRight = document.querySelector("#buttonFour")
botRight.addEventListener("click", (event) => {
    event.preventDefault()
    userInputArr.push(botRight) //pushes to user input's array
    console.log("update userInput", userInputArr)
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
    // randoButton.currentTarget.style.active = true
    lightEmUp(randoButtonArr)
    console.log("update randoButt", randoButtonArr)
})

//make funciton that hosts randoButtonArr, 

let buttColor = {
    buttonOne: {
        backgroundColor: "red",
        boxShadow: "0px 0px 15px 5px rgba(216, 26, 26, 0.75)"
    },
    buttonTwo: {
        backgroundColor: "blue",
        boxShadow: "0px 0px 15px 5px rgba(37, 16, 223, 0.75)"
    },
    buttonThree: {
        backgroundColor: "green",
        boxShadow: "0px 0px 15px 5px rgba(34, 235, 34, 0.75)"
    },
    buttonFour: {
        backgroundColor: "yellow",
        boxShadow: "0px 0px 15px 5px rgba(238, 235, 45, 0.75)"
    }
}

function lightEmUp(lightsArr) {
    let i = 0
    lightsArr.forEach(async(item) => { //(item) -the current item being iterated
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
            item.style.boxShadow = buttColor[item.id].boxShadow;
            item.style.backgroundColor = buttColor[item.id].backgroundColor;
            setTimeout(() => {
                item.style.boxShadow = "0 9px rgb(155, 153, 153)";
                item.style.backgroundColor = "rgb(235, 233, 233) ";
                }, 0250*lightsArr.length)
            }, 1000*i)
            i++
        }) 
    })
}

//2 functions, 1 to remove the addEventListner for ALL buttons, 1 to return(re-create) addEventListener for ALL buttons
//OR DISABLE THE ELEMENTS

// *------= Reset ALL Button =------* \\

const reset = document.getElementById("reset")
reset.addEventListener("click", event => sikeULost(event)) // calls up siekULost function

function sikeULost(event) { //is now accessible errwhere
        if (event) {event.preventDefault();} // "if (event)" is a null check. if it aint broke, it ok
        userInputArr.length = 0 //Button that "clears" by setting userInputArr = []
        randoButtonArr.length = 0
        console.log(userInputArr, randoButtonArr)
        console.log("we done")
}

// *------= Comparison Check =------* \\
//AFTER CLICK START
//onClick listener that checks 1) has user click.length = randoButtonArr.length
//if userInputArr === randoButtonArr
//then generate new random iteration inside randoButtonArr
// else sikeULost(event) < --fucntion
//REPEAT onClick listener (proceed to next level)
// extract CALLBACK from const reset --> make function

function checkWinCondition() {
    console.log("wincondition", userInputArr, randoButtonArr)
    if (userInputArr.length !== randoButtonArr.length) return
    if (arrayEquals(userInputArr, randoButtonArr)) {
        randoButtonArr.push(boxOButtons[Math.floor(Math.random()*boxOButtons.length)])
        userInputArr = []
        lightEmUp(randoButtonArr)
    } else {
        sikeULost(null)
}}

//halpfunction within wincondition to check if both arrays are equal\\
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

//GAME IN SESSION\\

//set boolean value to be associated with start button
/*
if game is in session (true)
if game is not in session (false)
*/