document.addEventListener('DOMContentLoaded', () => {
    const animalCards = document.querySelectorAll('.animal-card');

    animalCards.forEach(card => {
        card.addEventListener('click', () => {
            const animalName = card.querySelector('h3').textContent;
            alert(`Você clicou no card do(a) ${animalName}!`);
        });
    });
});
