// *------= Div Set-Up =------*

{/* <div>
        <div class="option" id="buttonOne"><h2>1</h2></div>
        <div class="option" id="buttonTwo"><h2>2</h2></div>

        <div class="option" id="buttonThree"><h2>3</h2></div>
        <div class="option" id="buttonFour"><h2>4</h2></div>
</div> */}

// *------= ORIGINAL =------*
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

// *------= Button Functionality =------*
const topLeft = document.querySelector(".option")
topLeft.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("you clicked TL")
    topLeft.style.background = "red"
    // topLeft.classList.toggle = "active"    
    // topLeft.style.background = "initial"
    //upon click, set color to default
})