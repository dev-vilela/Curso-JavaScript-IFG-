// let numeroA = prompt("Digite o primeiro numero: ")
// let numeroB = prompt("Digite o segundo numero: ")

// let resultado = numeroA * numeroB

// alert(numeroA + " x " + numeroB + " = " + resultado)

// let raio = prompt("Digite o raio: ");
// //AREA = PI * R^2

// const pi = 3.14;
// let area = pi * Math.pow(raio,2);

// alert("A area de um circulo com r= " + raio + " é " + area )

/*AULA CONDIÇÕES E LAÇOS DE REPETIÇÃO */

let lista = [];
let novoItem = prompt("Digite o nome do item ou - se não quiser adicionar");

while(novoItem != "-"){
    lista.push(novoItem)
    novoItem = prompt("Digite o nome do item ou - se não quiser adicionar");
}

if(lista.length == 0){
    alert("A lista esta vazia!")
}else{
    alert("Você deve comprar estes itens: ")
    for(let i=0; i < lista.length; i++){
        alert(lista[i]);
    }
}


