function createHearts() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️بحبك❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random rotation configuration
    const startRotation = Math.random() * 360; // Random starting angle
    const rotationAmount = (Math.random() * 720) - 360; // -360° to +360°
    
    heart.style.setProperty('--start-rotate', `${startRotation}deg`);
    heart.style.setProperty('--end-rotate', `${startRotation + rotationAmount}deg`);
    
    // Random animation duration between 8-12 seconds
    heart.style.animationDuration = `${Math.random() * 10 + 8}s`;
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 12000); // Match max animation time

    // Random scale between 0.8-1.2
    heart.style.transform = `scale(${Math.random() * 0.4 + 0.8})`;

    const rotationStyles = [
        'linear',
        'ease-in',
        'ease-out',
        'cubic-bezier(0.4, 0, 0.2, 1)'
    ];
    heart.style.animationTimingFunction = 
        rotationStyles[Math.floor(Math.random() * rotationStyles.length)];
}

// Start heart animation
setInterval(createHearts, 300);

function explodeHearts() {
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];
    const colors = ['❤️', '🧡', '💛', '💚', '💙', '💜'];
    
    angles.forEach(angle => {
        const heart = document.createElement('div');
        heart.className = 'explosion-heart';
        heart.textContent = colors[Math.floor(Math.random() * colors.length)];
        heart.style.setProperty('--angle', `${angle}deg`);
        
        // Apply rotation and movement
        heart.style.animation = `explode 1.5s ease-out forwards`;
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1500);
    });
}

// Update showWinScreen function
function showWinScreen() {
    const winScreen = document.getElementById('winScreen');
    document.getElementById('winTime').textContent = seconds;
    document.getElementById('winMoves').textContent = moves;
    winScreen.style.display = 'flex';
    
    // Trigger explosion with slight delay
    setTimeout(explodeHearts, 100);
}