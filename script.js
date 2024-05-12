const checkboxes = document.querySelectorAll('.options input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact__container form');

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Define regex patterns for validation
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const messageRegex = /^[a-zA-Z0-9\s.,?!]{1,200}$/;

        // Function to validate each field
        const validateField = (input, regex) => regex.test(input.value);

        // Validate nome field
        if (!validateField(nameInput, nameRegex)) {
            alert('Por favor, insira um nome válido.');
            return;
        }

        // Validate email field
        if (!validateField(emailInput, emailRegex)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        // Validate mensagem field
        if (!validateField(messageInput, messageRegex)) {
            alert('Por favor, insira uma mensagem válida.');
            return;
        }

        // If all fields are valid, submit the form
        alert('Formulário enviado com sucesso!');
        form.submit();
    });
});

const btnPopup = document.getElementById('btn__popup')

btnPopup.addEventListener('click', () => {
    fecharPopup();
})

document.addEventListener("DOMContentLoaded", function() {
    exibirPopup();
});

function exibirPopup() {
    document.getElementById('initial__popup').style.display = 'flex';
}

function fecharPopup() {
    document.getElementById('initial__popup').style.display = 'none';
}
