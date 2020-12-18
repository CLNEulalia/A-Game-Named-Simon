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