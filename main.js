function adicionarJogador() {
    var nome = document.getElementById("inseriJogador");
    jogadores.push({
      nome: nome.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });

    nome.value = "";
  exibeJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias *3)+ jogador.empates;
    return pontos;
}

var jogadores =[];

function exibeJogadoresNaTela(jogadores){
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++){

    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria(" + i +")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota(" + i +")'>Derrota</button></td>"
    elemento += "<td><button onClick='resetaPontos(" + i +")'>Reset</button></td>"
    elemento += "</tr>"

    }


    var tabelaJogadores = document.getElementById("tabelaJogadores");

    tabelaJogadores.innerHTML = elemento;

    var novoJogador = document.getElementById("jogador");
  novoJogador.innerText = elemento;

}

exibeJogadoresNaTela(jogadores);

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}

function resetaPontos(i) {
    var jogador = jogadores[i]
    jogador.empates = jogador.empates * 0
    jogador.vitorias = jogador.vitorias * 0
    jogador.derrotas = jogador.derrotas * 0
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

