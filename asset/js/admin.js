/*----------------------------------
#Menu admin
----------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const listDash = document.querySelector('.first-bloc nav');
    const exit = document.querySelector('.exit-dash');
    const menu = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay-dash');

    if (menu) {
        menu.addEventListener('click', () => {
            listDash.classList.add('active');
            overlay.classList.add('active');
            menu.style.display = 'none';
            exit.style.display = 'flex';
        });
    }

    if (exit) {
        exit.addEventListener('click', () => {
            listDash.classList.remove('active');
            overlay.classList.remove('active');
            exit.style.display = 'none';
            menu.style.display = 'flex';
        });
    }
});

/*----------------------------------
#Add member
----------------------------------*/
const placeholders = {
    facebook: "Entrer le lien de Facebook",
    instagram: "Entrer le lien d'Instagram",
    whatsapp: "Entrer le lien de WhatsApp",
    twitter: "Entrer le lien de Twitter",
    linkedin: "Entrer le lien de LinkedIn",
  };

  const checkboxContainer = document.getElementById("checkbox-container");
  const inputsContainer = document.getElementById("inputs-container");
  const checkboxes = checkboxContainer.querySelectorAll("input[type='checkbox']");

  checkboxContainer.addEventListener("change", () => {
    // Réinitialiser
    inputsContainer.innerHTML = "";

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const value = checkbox.value;

        const wrapper = document.createElement("div");
        wrapper.className = "input-wrapper";

        const input = document.createElement("input");
        input.type = "url";
        input.placeholder = placeholders[value] || "Entrer un lien";

        wrapper.appendChild(input);
        inputsContainer.appendChild(wrapper);
      }
    });
  });