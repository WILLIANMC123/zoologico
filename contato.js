document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário

            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso e em breve entraremos em contato.`);
            
            contactForm.reset(); // Limpa os campos do formulário
        });
    }
});
