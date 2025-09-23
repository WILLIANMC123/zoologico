document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-online');

    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Aguarde! Em breve você será redirecionado para a página de compra de ingressos.');
            // Você pode substituir o alerta por um link real, por exemplo:
            // window.location.href = 'https://link-para-a-loja.com';
        });
    }
});
