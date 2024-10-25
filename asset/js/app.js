/* --------------------
#Home page text
-------------------- */
const texts = ["Compalight!", "Communiquer pour inpirer!", "Unir pour prosperer!", "Impacter pour briller!"];

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


/* --------------------
#Scroller
-------------------- */
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

/* --------------------
#Mission
-------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.list-items ul li'); // Cibler les éléments de la liste
    const shoeCategories = document.querySelectorAll('.us'); // Cibler les sections à masquer/afficher

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Supprimer la classe 'active' de tous les éléments et ajouter à l'élément cliqué
            categoryItems.forEach(catItem => catItem.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter'); // Récupérer le filtre à partir de l'attribut data-filter

            shoeCategories.forEach(category => {
                // Si l'élément a la classe correspondant au filtre, on l'affiche, sinon on le masque
                if (category.classList.contains(filter)) {
                    category.style.display = 'flex'; // Afficher l'élément correspondant
                } else {
                    category.style.display = 'none'; // Masquer les autres éléments
                }
            });
        });
    });
});

/*------------------------------
#Up icon
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const scrollUps = document.querySelectorAll('.scrollUp');
    const homePageHeight = window.innerHeight;

    const toggleScrollUpVisibility = () => {
        scrollUps.forEach((scrollUp) => {
            if (window.scrollY > homePageHeight) {
                scrollUp.style.display = 'block';
            } else {
                scrollUp.style.display = 'none';
            }
        });
    };

    toggleScrollUpVisibility();

    window.addEventListener('scroll', toggleScrollUpVisibility);

    scrollUps.forEach((scrollUp) => {
        scrollUp.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

/*-----------------------------/
#Team
/-----------------------------*/

const teamContainer = document.querySelector('.team-container');
const members = document.querySelectorAll('.team .member');
const prevButton = document.querySelector('.scroll-btn .prev');
const nextButton = document.querySelector('.scroll-btn .next');

let currentStartIndex = 0;
let visibleCount = getVisibleCount(); // Initialiser le nombre d'images visibles

// Fonction pour obtenir visibleCount selon la taille d'écran
function getVisibleCount() {
    if (window.innerWidth >= 1230) {
        return 4; // Ordinateur large
    } else if (window.innerWidth >= 970) {
        return 3; // Ordinateur moyen
    } else if (window.innerWidth >= 560) {
        return 2; // Tablette
    } else {
        return 1; // Mobile
    }
}

// Fonction pour mettre à jour la visibilité des membres
function updateVisibility() {
    members.forEach((member, index) => {
        member.style.display = (index >= currentStartIndex && index < currentStartIndex + visibleCount) ? 'block' : 'none';
    });

    // Gérer l'affichage des boutons Prev et Next
    prevButton.style.display = (currentStartIndex > 0) ? 'inline-block' : 'none';
    nextButton.style.display = (currentStartIndex + visibleCount < members.length) ? 'inline-block' : 'none';
}

// Écouteur pour le bouton Next
nextButton.addEventListener('click', () => {
    if (currentStartIndex + visibleCount < members.length) {
        currentStartIndex++;
        updateVisibility();
    }
});

// Écouteur pour le bouton Prev
prevButton.addEventListener('click', () => {
    if (currentStartIndex > 0) {
        currentStartIndex--;
        updateVisibility();
    }
});

// Mise à jour du nombre d'images visibles au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    visibleCount = getVisibleCount();
    currentStartIndex = 0; // Réinitialise pour revenir au début de la liste
    updateVisibility();
});

// Initialiser la visibilité au chargement de la page
updateVisibility();