// Establecer la fecha de destino (reemplaza esto con tu propia fecha)
const targetDate = new Date("2024-11-16T19:00:00").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML =
      "¡El evento ya esta iniciado!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Llamar a la función de actualización inicial
updateCountdown();
