let listaDeNumerosSorteados = [] // criação da lista antes dos comandos
let numeroLimite = 20; // limite de numeros que podem ser sorteados, começa na linha 2 antes do gerar numero aleatorio
let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1; //já começa com 1 porque a primeira tentiva já conta.
exibirTextoInicial()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window){ 
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web speech API não suportada neste navegador.");
    }
}
function exibirTextoInicial(){
exibirTextoNaTela("h1", "Boas vindas ao jogo do número secreto!");
exibirTextoNaTela("p", "Selecione um número de 1 a 20");
}
console.log("amor, te amo");
function verificarChute(){
    let chute = document.querySelector("input").value //adicionamos o .value pois queremos apenas o valor colocado no input pelo usuário, não todo o input
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns, você acertou!");
        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa' //operador ternário
        let mensagemTentativas = "Você acertou o número secreto com "+tentativa+" "+palavraTentativa;
        exibirTextoNaTela('p', mensagemTentativas); 
        document.getElementById("reiniciar").removeAttribute("disabled"); // como temos mais de um botão, um deles sendo o botão de chute, 
        // o mais sensato é selecionar diretamente do html o botão por elemento ID, que no caso é "reiniciar".
        //com o getelementbyid reiniciar já selecionamos o botão desejado, agora precisamos usar o js pra alterar o que está 
        //impedindo o botão de funcionar, que no caso é o "disabled" presente no HTML. Removemos ele com o removeAttribute e o botão fica funcional novamente.
    } else {
        if(chute > numeroSecreto){ 
            exibirTextoNaTela("h1", "Você errou!");
            exibirTextoNaTela("p", "O número secreto é menor!");
        } else {
            exibirTextoNaTela("h1", "Você errou!");
            exibirTextoNaTela("p", "O número secreto é maior!");
        }
        tentativa++;
        limparChute()
    }
} 

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //a quantidade de numeros na lista é igual a lista de 
    //numeros. length, verificando a quantidade de numeros na lista
    if(quantidadeDeElementosNaLista == numeroLimite){ // se a quantidade de numeros na lista for igual o numero limite
        listaDeNumerosSorteados = []; //deixe a lista em branco, zere ela 
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) { //se a lista de numeros sorteados já tiver incluso o numero escolhido
    return gerarNumeroAleatorio() // gere outro numero aleatorio 
    //return de uma função que já foi chamada se chama recurssão
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // push é o comando que adiciona algo no final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido // se o numero gerado não estiver incluso na lista, adicione o numero gerado no final da lista, mostre ele
        //no console.log e retorne o numeroEscolhido (numero gerado)

    } 
}
function limparChute(){
    chute = document.querySelector('input'); //atribuimos o valor de chute ao input selecionando o botão input do html com o query selector
    chute.value = ''; //adicionamos o .value e duas aspas vazias pois queremos que o valor do chute se torne uma string vazia, sem texto
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparChute()
    tentativas = 1;
    exibirTextoInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
} //selecionamos o botão iniciar novo jogo e ao invés de usar removeAttribute, na verdade settamos um attribute novo nele
//que é o "disabled", true isso significa que queremos que o botão fique desabilitado novamente enquanto a função reiniciarjogo
//for executada.



//funçao sem parametro = verifica algo e não precisa de parametro pra funcionar nem retorna nada
//função com parametro = verifica algo e exibe na tela, precisa de um parametro pra funcionar mas não retorna nada
//função com retorno = te retora algo mas não necessita de um parametro
// == comparar valor, = atribuir valor
// tipos booleanos = verdadeiro ou falso
// tipo string = texto
