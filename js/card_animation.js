document.querySelectorAll('.card').forEach(card => {
    card.style.transition = 'transform 0.3s ease';

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30; 
        const y = (e.clientY - rect.top - rect.height / 2) / 30; 
        card.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});