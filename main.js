//1. a)
function clkP(){
    document.querySelectorAll("p").forEach(elem => {
        elem.addEventListener("click", () => {
            elem.innerHTML = "Parágrafo clicado";
        });
        elem.addEventListener("dblclick", () => {
            elem.innerHTML = Parágrafo duplo-clicado";
        })
    })
}

//1. b)
function hideMe(){
    var btn = document.querySelector("#b2");
    var hides = document.querySelectorAll(".hideMe");
    btn.addEventListener("click", () => {
        hides.forEach(elem => {
            elem.style.display = "none";
        })
    })
}
