/* 

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostra o proximo cartão da lista:
- passo 01 - dar um jeiro de pegar o elemento HTML da seta avançar.
- passo 02 - dar umm jeito de identificar o clique do usuario da seta avançar.
- passo 03 - fazer aparecer o proximo cartão da lista.
- passo 04 - buscar o cartão que esta selecionado e esconder.

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista:
- passo 01 - dar um jeito de pegar o elemento HTML da seta voltar.
- passo 02 - dar um jeito de identificar o clique do usuario na seta voltar.
- passo 03 fazer aparecer o cartão anterio da lista.
- passo 04 - buscar o cartão que esta selecionado e esconder.

*/

//passo 01 - dar um jeiro de pegar o elemento HTML da seta avançar.
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//passo 02 - dar umm jeito de identificar o clique do usuario da seta avançar.
btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1) return;

    //passo 04 - buscar o cartão que esta selecionado e esconder.
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    //passo 03 - fazer aparecer o proximo cartão da lista.
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

    //passo 04 - buscar o cartão que esta selecionado e esconder.

})

btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0) return;

    
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});

