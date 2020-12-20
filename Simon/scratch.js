// *------= Div Set-Up =------* \\

/*{ <div>
        <div class="option" id="buttonOne"><h2>1</h2></div>
        <div class="option" id="buttonTwo"><h2>2</h2></div>

        <div class="option" id="buttonThree"><h2>3</h2></div>
        <div class="option" id="buttonFour"><h2>4</h2></div>
</div> }*/

// *------= ORIGINAL =------* \\
/*
<div>
        <table style="width:0%" id="theBoard">
            <tr>
                <td><div class="option" id="buttonOne"><h2>1</h2></div></td>
                <td><div class="option" id="buttonTwo"><h2>2</h2></div></td>
            </tr>

            <tr>
                <td><div class="option" id="buttonThree"><h2>3</h2></div></td>
                <td><div class="option" id="buttonFour"><h2>4</h2></div></td>
            </tr>
        </table>
    </div>
*/

// *------= Clicky ALL Buttons?? =------* \\

// const themButtons = document.getElementsByClassName("option")
// const boxOButtons = []

// *------= Independant Buttons =------* \\
/*
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
*/

// *------= use .forEach =------* \\

// document.querySelectorAll(".options").forEach((themButtons) => {
//     themButtons.addEventListener("click", (event) => {
//         event.preventDefault()
//         console.log(themButtons)
//     })
// })

// *------= Independant Buttons =------* \\
/*
const topLeft = document.querySelector("#buttonOne")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked TL")

})
*/

// *------= For Loop buttons -> Array =------* \\

// const themButtons = document.getElementsByClassName("option")
// const boxOButtons = []

/*
for (let i=0; i<themButtons.length; i++) {
    themButtons[i].addEventListener("click", (event) => {
        event.preventDefault()
        if (document.getElementById("buttonOne").onclick = true) {
            console.log("topLeft")
        } else if (document.getElementById("buttonTwo").onclick = true) {
            console.log("topRight")
        } else {
            console.log("what button am i?")
        }
    })
}
*/
//

// *------= Comparison Checker (?) =------* \\

// if (userInputArr === randoButton) {
//     console.log("ready for next level")
// }

// *------= Random Index & Light-Up On Start =------* \\

// const boxOButtons = [ // where the computer chooses its random interation from
//     topLeft,
//     topRight,
//     botLeft,
//     botRight
// ]

// let randoButtonArr = [] // where the random sequence is stored

// const start = document.getElementById("start") //start button
// start.addEventListener("click", (event) => {
//     event.preventDefault();
//     let randoButton = boxOButtons[Math.floor(Math.random()*boxOButtons.length)]
//     randoButtonArr.push(randoButton) //pushes to the random array
//     // randoButton.currentTarget.style.active = true
//     console.log(randoButtonArr)
//     ((nextIteration) => {
//         setTimeout()
//     })
// })

// *------= Random Interation Incrementor =------*

// ((nextIteration) => {
//     setTimeout(randoButton += boxOButtons[Math.floor(Math.random()*boxOButtons.length)], 2500)
// })

// *------= That Stupid Start Button =------* \\
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

// fuck that  ^^^^

// *------= SEQUENCE AND LIGHTEMUP =------* \\
/* // NO TOUCHY
function lightEmUp(lightsArr) {
    let i = 0
    lightsArr.forEach(async(item) => { //(item) -the current item being iterated
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log(item.id)
            item.style.boxShadow = buttColor[item.id].boxShadow;
            item.style.backgroundColor = buttColor[item.id].backgroundColor;
            setTimeout(() => {
                item.style.boxShadow = "0 9px rgb(155, 153, 153)";
                item.style.backgroundColor = "rgb(235, 233, 233) ";
                }, 0250)
            }, 1000*i)
            i++
            
        }) 
    })
}
*/ // NO TOUCHY

// *------= FAHIM'S VERSION =------* \\

function lightEmUp(lightsArr) {
    let i = 0
    // setInterval(() => {
    //     if (i > 0) {
    //         const previous = lightsArr[i - 1];
    //         previous.style.boxShadow = "0 9px rgb(155, 153, 153)";
    //         previous.style.backgroundColor = "rgb(235, 233, 233) ";
    //     }
    //     const item = lightsArr[i];
    //     item.style.boxShadow = buttColor[item.id].boxShadow;
    //     item.style.backgroundColor = buttColor[item.id].backgroundColor;
    //     i++;
    // }, 0250);
lightsArr.forEach((item) => { //(item) -the current item being iterated
    item.style.boxShadow = buttColor[item.id].boxShadow;
    item.style.backgroundColor = buttColor[item.id].backgroundColor;
    setTimeout(() => {
        item.style.boxShadow = "0 9px rgb(155, 153, 153)";
        item.style.backgroundColor = "rgb(235, 233, 233) ";
    }, 0250);
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
        item.style.boxShadow = buttColor[item.id].boxShadow;
        item.style.backgroundColor = buttColor[item.id].backgroundColor;
        setTimeout(() => {
            item.style.boxShadow = "0 9px rgb(155, 153, 153)";
            item.style.backgroundColor = "rgb(235, 233, 233) ";
            }, 0250)
        }, 1000*i)
        i++
        
    }) 
})
}

//*------= REATTEMPT AT SEQUENCE & LIGHTUP =------*\\

// Set a variable that does something like currentLevel * 250, we'll call it 'levelTimer' for now, and then have your setTimeout number be 5000 (or whatever time youre using) - levelTimer

// That way your timer will decrease with each level you go up, making the game more challenging without even having to touch the sequencer

function lightEmUp(lightsArr) {
    let i = 0
    lightsArr.forEach(async(item) => { //(item) -the current item being iterated
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log(item.id)
            item.style.boxShadow = buttColor[item.id].boxShadow;
            item.style.backgroundColor = buttColor[item.id].backgroundColor;
            setTimeout(() => {
                item.style.boxShadow = "0 9px rgb(155, 153, 153)";
                item.style.backgroundColor = "rgb(235, 233, 233) ";
                }, 0250*lightsArr.length)
            }, 1000)
            i++
        }) 
    })
}

// *------= MOST RECENT POSSIBLE FAILED SUCCESS =------* \\

function lightEmUp(lightsArr) {
    let i = 0
    setInterval(() => {
        if (i > 0) {
            const previous = lightsArr[i - 1];
            previous.style.boxShadow = "0 9px rgb(155, 153, 153)";
            previous.style.backgroundColor = "rgb(235, 233, 233) ";
        }
        const item = lightsArr[i];
        item.style.boxShadow = buttColor[item.id].boxShadow;
        item.style.backgroundColor = buttColor[item.id].backgroundColor;
        i++;
    }, 1250); //it's greater than 1 second so it works????
}