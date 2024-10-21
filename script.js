// 2️⃣ Calculadora de partidas Rankeadas

function rankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let classificador;

    if (saldo <= 10) {
        classificador = "Ferro";
      } else if (saldo >= 11 && saldo <= 20) {
        classificador = "Bronze";
      } else if (saldo >= 21 && saldo <= 50) {
        classificador = "Prata";
      } else if (saldo >= 51 && saldo <= 80) {
        classificador = "Ouro";
      } else if (saldo >= 81 && saldo <= 90) {
        classificador = "Diamante";
      } else if (saldo >= 91 && saldo <= 100){
          classificador = "Lendário";
      } else if (saldo >= 101) {
          classificador = "Imortal";
      } else {
        classificador = "Inválido";
      }
      return classificador
}

let vitorias = 60
let derrotas = 15
let saldototal = vitorias - derrotas
let resultado = rankeadas(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldototal} e está no nível ${resultado}`);

