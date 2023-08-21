// index.js
document.addEventListener("DOMContentLoaded", function () {
    var buttonText = document.getElementById("buttonText");
    var inputText = document.getElementById("inputText");

    buttonText.addEventListener("click", function () {
        var inputValue = inputText.value;
        localStorage.setItem("dato", inputValue);
   
    });
});
