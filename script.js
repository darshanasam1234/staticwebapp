// script.js
document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeText");
    const changeBackgroundColorButton = document.getElementById("changeBackgroundColor");
    const main = document.querySelector("main");
    const text = document.querySelector("main p");

    changeTextButton.addEventListener("click", function () {
        text.textContent = "Text changed!";
    });

    changeBackgroundColorButton.addEventListener("click", function () {
        // Generate a random color (hexadecimal)
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        main.style.backgroundColor = randomColor;
    });
});
