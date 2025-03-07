const cookie = document.getElementById('cookie');

cookie.addEventListener('click', () => {
    // Pausar la animación y agrandar más con un giro
    cookie.style.animation = 'none';
    cookie.style.transform = 'scale(2) rotate(15deg)';
    cookie.style.filter = 'drop-shadow(0 0 25px rgba(255, 105, 180, 1))';

    // Volver a la animación después de 0.4 segundos
    setTimeout(() => {
        cookie.style.animation = 'growShrink 1.5s infinite ease-in-out';
        cookie.style.transform = 'scale(1)';
        cookie.style.filter = 'drop-shadow(0 0 5px rgba(255, 182, 193, 0.8))';
    }, 400);

    alert('¡Lucero, tu energía hace crecer esta galleta mágica! 🍪');
});