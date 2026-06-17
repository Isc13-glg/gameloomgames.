// 🎯 SET YOUR EVENT DATE HERE
const eventDate = new Date("2026-01-01T00:00:00").getTime();

const timer = setInterval(function () {

const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML =
days + "d " + hours + "h " + minutes + "m " + seconds + "s";

if (distance < 0) {
clearInterval(timer);

// hide gate
document.getElementById("gate").style.display = "none";

// show site
document.getElementById("site").style.display = "block";
}

}, 1000);
