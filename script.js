// script.js

// Defina a data inicial como 18 de setembro de 2024, 00:00:00
const dataInicial = new Date('2024-09-19T00:00:00').getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = agora - dataInicial;

    // Calcular o tempo desde a data inicial
    const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365));  // Aproximadamente anos
    const meses = Math.floor((distancia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));  // Aproximadamente meses
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));  // Dias restantes
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Horas
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));  // Minutos
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);  // Segundos

    // Atualizar a interface com os novos valores
    document.getElementById("contador-anos").textContent = anos;
    document.getElementById("contador-meses").textContent = meses;
    document.getElementById("contador-dias").textContent = dias;
    document.getElementById("contador-horas").textContent = horas;
    document.getElementById("contador-minutos").textContent = minutos;
    document.getElementById("contador-segundos").textContent = segundos;

    // Atualizar a cada segundo
    setTimeout(atualizarContador, 1000);
}

// Iniciar o contador
atualizarContador();



function startMusic() {
    const music = document.getElementById('background-music');
    music.play(); // Inicia a música
    document.getElementById('popup').style.display = 'none'; // Esconde o pop-up
  }