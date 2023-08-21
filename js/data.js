// data.js
document.addEventListener("DOMContentLoaded", function () {
    var dataSpan = document.getElementById("data");
    var dato = localStorage.getItem("dato");

    if (dato) {
        dataSpan.textContent = dato;
    } else {
        dataSpan.textContent = "No hay dato guardado.";
    }
});
