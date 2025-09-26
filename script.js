document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Para ver os animais clique na categoria "animais" no canto superior direito.');
            // Em um site real, você faria algo como:
            // window.location.href = 'animais.html';
        });
    }

    console.log('Site do Zoológico carregado com sucesso!');
});
