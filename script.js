// Initialize Lucide Icons
function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Typing Effect for Hero Section
function initTypingEffect() {
    const textToType = [
        "Mewujudkan Ide Anda Menjadi Realita Digital.",
        "Desain Web yang Estetik & Fungsional.",
        "Solusi Desain Grafis Profesional."
    ];
    const typingSpeed = 70; // speed in milliseconds
    const eraseSpeed = 40;
    const delayAfterType = 1500;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const element = document.getElementById('typing-text');

    if (!element) return;

    function type() {
        const currentText = textToType[textIndex];

        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? eraseSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            speed = delayAfterType;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textToType.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    type();
}

// Global initialization on page load
document.addEventListener('DOMContentLoaded', () => {
    initIcons();
    initTypingEffect();
});