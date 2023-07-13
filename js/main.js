
    function alternaTema() {
        
    const body = document.querySelector("body");
    const linksLink = document.querySelectorAll(".apresentacao__links__link");
    const darkModeBotao = document.querySelector("#alternaTema");

    body.classList.toggle("dark-mode");

    darkModeBotao.classList.toggle("dark-mode");

    for (let i = 0; i < linksLink.length; i++) {
        let link = [];
        link = linksLink[i];
        link.classList.toggle("dark-mode");
        }

    //faz a verificação se o dark mode está ativo naquele momento
    const temDarkMode = body.classList.contains("dark-mode");

    //faz o armazenamento do atual tema que estou usando
    localStorage.setItem("darkMode", temDarkMode);
}

//verifica qual tema está salvo no meu local storage
const verificaDarkMode = localStorage.getItem("darkMode");

if (verificaDarkMode == 'true') {
    document.querySelector("body").classList.add("dark-mode");
    const linksLink = document.querySelectorAll(".apresentacao__links__link");

    document.querySelector("#alternaTema").classList.add("dark-mode");

    for (let i = 0; i < linksLink.length; i++) {
        let link = [];
        link = linksLink[i];
        link.classList.add("dark-mode");
        }
}

const botaoAlternaTema = document.getElementById("alternaTema");

botaoAlternaTema.addEventListener("click", alternaTema);