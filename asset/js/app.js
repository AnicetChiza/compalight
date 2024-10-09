const texts = ["Votre agence!", "Communiquer pour inpirer!", "Unir pour prosperer!", "Impacter pour briller!"];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const fullText = texts[index];

    if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
    }

    document.getElementById("text").textContent = currentText;

    if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Temps d'attente avant de commencer à effacer
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Passe au texte suivant
    }

    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    type(); // Lancer l'animation au chargement de la page
});


// 
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}