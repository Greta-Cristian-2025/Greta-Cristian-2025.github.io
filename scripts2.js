// Countdown al matrimonio
const weddingDate = new Date("Sep 14, 2025 11:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerText = "Il grande giorno è arrivato!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Carosello di immagini
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function moveCarousel(direction) {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    images[currentIndex].classList.add("active");
});

// Copia IBAN

document.getElementById("copy-iban-icon").addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById("iban-text").innerText)
        .then(() => alert("IBAN copiato!"))
        .catch(() => alert("Errore nella copia dell'IBAN!"));
});
