const hexCode = document.querySelector(".hex-color");
const btn = document.getElementById("btn");

// initial render to display a random color by default
generateColor();

function generateColor() {
    let randNum = Math.floor(Math.random() * 16777215);
    let colorCode = "#" + randNum.toString(16); //Convert a randNum to a string, using base 16 (Hexadecimal)
    document.body.style.backgroundColor = colorCode;
    hexCode.textContent = colorCode;

    // getting the color code in clipboard
    navigator.clipboard.writeText(colorCode);
}

btn.addEventListener('click', generateColor);