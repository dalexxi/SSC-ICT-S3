// script.js

// JavaScript to toggle accordion content
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('active');
    });

    // Hide accordion content by default
    const content = button.nextElementSibling;
    content.style.display = 'none'; // This line was added to hide content by default
});
