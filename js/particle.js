document.addEventListener("DOMContentLoaded", function() {
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--x', `${(Math.random() - 0.5) * 100}px`);
        particle.style.setProperty('--y', `${(Math.random() - 0.5) * 100}px`);
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