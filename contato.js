document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário

            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Esse recurso infelizmente não esta disponivel no momento`);
            
            contactForm.reset(); // Limpa os campos do formulário
        });
    }
});
