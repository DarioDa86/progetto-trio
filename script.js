function cambia() {
    var elemento_main = document.querySelector(".body_scritta_piu_grande");
    var elemento_foot = document.querySelector(".bg-color");
    var stile_main = getComputedStyle(elemento_main);

    if (stile_main.backgroundColor == "rgb(255, 0, 0)") {
        elemento_main.style.backgroundColor = "rgb(255, 190, 74)";
        elemento_foot.style.backgroundColor = "rgb(255, 190, 74)";
    } else {
        elemento_main.style.backgroundColor = "red";
        elemento_foot.style.backgroundColor = "red";
    }
}