// Countdown al matrimonio
const weddingDate = new Date("Sep 14, 2025 11:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Il grande giorno è arrivato!";
    }
}, 1000);

// Carosello di immagini
let currentIndex = 1; // Iniziamo con la seconda immagine come centrale

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Rimuovi le classi precedenti
    images.forEach(img => img.classList.remove('main', 'left', 'right', 'left-left', 'right-right'));

    // Aggiorna l'indice corrente
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Calcola gli indici per le immagini visibili
    const leftIndex = (currentIndex - 1 + totalImages) % totalImages;
    const rightIndex = (currentIndex + 1) % totalImages;
    const leftLeftIndex = (currentIndex - 2 + totalImages) % totalImages;
    const rightRightIndex = (currentIndex + 2) % totalImages;

    // Assegna le classi corrette
    images[leftLeftIndex].classList.add('left-left');
    images[leftIndex].classList.add('left');
    images[currentIndex].classList.add('main');
    images[rightIndex].classList.add('right');
    images[rightRightIndex].classList.add('right-right');
}
// Inizializza il carosello all'avvio
document.addEventListener("DOMContentLoaded", () => {
    moveCarousel(0); // Posiziona le immagini correttamente
});


document.addEventListener("DOMContentLoaded", () => {
    const copyIcon = document.getElementById("copy-iban-icon");
    const ibanText = document.getElementById("iban-text").innerText;
    copyIcon.addEventListener("click", () => {
        navigator.clipboard.writeText(ibanText)
            .then(() => alert("IBAN copiato negli appunti!"))
            .catch(() => alert("Errore nella copia dell'IBAN!"));
    });
});


