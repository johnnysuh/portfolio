function mudarBackground() {
    var fundo = document.querySelector("body");
    if (fundo.style.backgroundColor === "rgb(2, 31, 45)") {


      fundo.style.transition = "background-color 1s";


       fundo.style.backgroundColor = "rgba(236,236,236,255)";


    } else {


      fundo.style.transition = "background-color 1s";


      fundo.style.backgroundColor = " rgb(2, 31, 45)";
    }
}