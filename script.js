// Manejo del formulario de contacto
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, mediante AJAX
    console.log('Formulario enviado');

    // Restablecer los campos del formulario
    form.reset();
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Simulate a successful form submission
        form.reset();
        successMessage.classList.remove("hidden");
    });
});
