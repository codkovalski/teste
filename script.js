const timer = document.getElementById("timer");
const mcqueen = document.getElementById("mcqueen");
const mcqueen2 = document.getElementById("mcqueen2");
let intervalo = null;
let estado = 0; 
// 0 parado, 1 rodando, 2 pausado

let startTime = 0;   // quando começou
let elapsed = 0;     // tempo acumulado ao pausar

function formatar(ms) {
  let horas = Math.floor(ms / 3600000);
  let minutos = Math.floor((ms % 3600000) / 60000);
  let segundos = Math.floor((ms % 60000) / 1000);
  let milis = Math.floor(ms % 1000);

  horas = String(horas).padStart(2, "0");
  minutos = String(minutos).padStart(2, "0");
  segundos = String(segundos).padStart(2, "0");
  milis = String(milis).padStart(3, "0");

  return `${horas}:${minutos}:${segundos}.${milis}`;
}

function atualizar() {
  const agora = Date.now();
  const tempoAtual = elapsed + (agora - startTime);
  timer.textContent = formatar(tempoAtual);
}

function iniciar() {
  startTime = Date.now();
  intervalo = setInterval(atualizar, 10);
  estado = 1;
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
  elapsed += Date.now() - startTime;
  estado = 2;
}

function resetar() {
  clearInterval(intervalo);
  intervalo = null;
  elapsed = 0;
  startTime = 0;
  timer.textContent = "00:00:00.000";
  estado = 0;
}

mcqueen.addEventListener("click", () => {
  if (estado === 0) {
    iniciar();
  } 
  else if (estado === 1) {
    pausar();
  } 
  else if (estado === 2) {
    iniciar();
  }
});

mcqueen2.addEventListener("click", () => {
  resetar();
});

timer.textContent = "00:00:00.000";