document.addEventListener('DOMContentLoaded', function() {
    // Animation au chargement des cartes
    const cards = document.querySelectorAll('.home-card');
    cards.forEach((card, index) => {
        card.style.animation = `slideUp 0.5s ease ${index * 0.1}s forwards`;
    });
});

// Animation slidUp
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
