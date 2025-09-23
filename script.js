document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Você clicou no botão! A seguir, uma página com a lista de animais seria carregada.');
            // Em um site real, você faria algo como:
            // window.location.href = 'animais.html';
        });
    }

    console.log('Site do Zoológico carregado com sucesso!');
});
