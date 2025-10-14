document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-online');

    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Infelizmente esse recurso não esta disponivel.');
            // Você pode substituir o alerta por um link real, por exemplo:
            // window.location.href = 'https://link-para-a-loja.com';
        });
    }
});
