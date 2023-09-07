// script.js
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeText");
    const main = document.querySelector("main p");

    button.addEventListener("click", function () {
        main.textContent = "Text changed!";
    });
});
