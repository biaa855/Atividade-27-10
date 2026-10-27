//let body = document.querySelector("body");
//let div = document.querySelector("div");
//body.removeChild(div);

//let body = document.querySelector("body")
//let h1 = document.querySelector("h1")
//body.removeChild(h1)

//let h1 = document.querySelector("#trocarCor");

//Ese comnado serve para muda a cor a letra
//h1.style.color = "bright pink"

//muda a cor de fundo
//h1.style.background = "purple"

//tamanho da cor de fundo
//h1.style.height = "20px"

//let body = document.querySelector("body")
//body.style.background = "purple"

//var h1 = document.querySelector("h1");
//var paragrafo = document.querySelector("p");

//paragrafo.innerText = h1.innerText;

//let cor = prompt("Escolha uma cor:");

//if (cor == "red" || cor == "blue" || cor == "yellow") {
  //  document.body.style.backgroundColor = cor;
    //alert("cor primaria escolhida");
//} else {
  //  document.body.style.backgroundColor = cor;
    //alert("cor secundaria escolhida");
//}

let h1 = document.querySelector("h1");
let button = document.querySelector("button");

button.addEventListener("click",function(){
    console.log("cliquei")
    document.body.style.background = "red"
    h1.style.color = "gold"
})