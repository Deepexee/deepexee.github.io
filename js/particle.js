document.addEventListener("DOMContentLoaded", function() {
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        let deltaX = (Math.random() - 0.5) * 100;
        let deltaY = (Math.random() - 0.5) * 100;
        if (x + deltaX > window.innerWidth || x + deltaX < 0) {
            deltaX = -deltaX;
        }
        if (y + deltaY > window.innerHeight || y + deltaY < 0) {
            deltaY = -deltaY;
        }

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--x', `${deltaX}px`);
        particle.style.setProperty('--y', `${deltaY}px`);
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
    
    function generateParticles() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createParticle(x, y);
    }
    
    setInterval(generateParticles, 50);
});
