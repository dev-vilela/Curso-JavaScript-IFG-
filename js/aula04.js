function buscarCep(){
    let cep = prompt("Digite o seu CEP: ");

    let url = "https://brasilapi.com.br/api/cep/v2/" + cep;
    
    fetch(url)
        .then(function(resposta){
            resposta.json().then(function(dados){
                console.log(dados);
               
            })
        })
        .catch(function(erro){
            console.log("Ocorreu um erro ao buscar os dados", erro)
        })
}
buscarCep();