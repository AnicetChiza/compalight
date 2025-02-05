/*------------------------------
#Faq
/-----------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.faq-answer');
    const rightIcons = document.querySelectorAll('.right');
    const downIcons = document.querySelectorAll('.down');

    answers.forEach((answer, i) => {
        const state = localStorage.getItem(`faq-answer-${i}`);
        if (state === 'open') {
            answer.style.display = 'block';
            rightIcons[i].style.display = 'none';
            downIcons[i].style.display = 'inline';
        } else {
            answer.style.display = 'none';
            rightIcons[i].style.display = 'inline';
            downIcons[i].style.display = 'none';
        }
    });
});

document.querySelectorAll('.faq-question').forEach((question, index) => {
    question.addEventListener('click', () => {
        const answers = document.querySelectorAll('.faq-answer');
        const rightIcons = document.querySelectorAll('.right');
        const downIcons = document.querySelectorAll('.down');

        answers.forEach((answer, i) => {
            if (i === index) {

                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    rightIcons[i].style.display = 'none';
                    downIcons[i].style.display = 'inline';
                    localStorage.setItem(`faq-answer-${i}`, 'open');
                } else {
                    answer.style.display = 'none';
                    rightIcons[i].style.display = 'inline';
                    downIcons[i].style.display = 'none';
                    localStorage.setItem(`faq-answer-${i}`, 'closed');
                }
            } else {
                answer.style.display = 'none';
                rightIcons[i].style.display = 'inline';
                downIcons[i].style.display = 'none';
                localStorage.setItem(`faq-answer-${i}`, 'closed');
            }
        });
    });
});

document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

document.querySelectorAll('.down').forEach(downIcon => {
    downIcon.style.display = 'none';
});

document.querySelectorAll('.right').forEach(rightIcon => {
    rightIcon.style.display = 'inline';
});

function showDropdown() {
    document.getElementById("dropdown-content").style.display = "block";
}

function selectOption(value) {
    document.getElementById("dropdown-input").value = value;
    document.getElementById("dropdown-content").style.display = "none";
}

// Fermer la liste déroulante si l'utilisateur clique en dehors
document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
        document.getElementById("dropdown-content").style.display = "none";
    }
}); 

/* ------------------------------- / 
#Gallery see images
/ ------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les icônes et l'élément modal
    const viewIcons = document.querySelectorAll('.vieuw-img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    // Ajouter un événement au clic sur l'icône
    viewIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Trouver l'image associée à l'icône
            const parent = this.closest('.gallery-img');
            const imageElement = parent.querySelector('img');

            // Mettre à jour l'image dans le modal
            if (imageElement) {
                modalImage.src = imageElement.src; // Mettre à jour la source de l'image dans le modal
                modal.style.display = 'flex'; // Afficher le modal
            }
        });
    });

    // Ajouter un événement pour fermer le modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Masquer le modal
    });

    // Fermer le modal si l'utilisateur clique en dehors de l'image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});