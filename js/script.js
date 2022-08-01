let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  const qdtTotalCerveja = cervejaPP(duracao) * adultos;
  const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<h2> Você vai precisar de: </h2>`;
  resultado.innerHTML += `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 430)} Latões de Cerveja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} garrafas de Bebidas</p>`;

  console.log(carnePP(duracao), cervejaPP(duracao), bebidasPP(duracao));
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  }
  return 400;
}
function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  }
  return 1000;
}
function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  }
  return 1200;
}
