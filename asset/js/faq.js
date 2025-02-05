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