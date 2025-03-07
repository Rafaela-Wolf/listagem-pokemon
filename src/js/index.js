<<<<<<< HEAD
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); 

    body.classList.toggle("modo-escuro");
     
    if(modoEscuroEstaAtivo){
        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
    imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
=======
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); 

    body.classList.toggle("modo-escuro");
     
    if(modoEscuroEstaAtivo){
        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
    imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
>>>>>>> 6801da138317bce7979dc9296f9ae773b8f95a01
});