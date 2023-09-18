// script.js

document.getElementById('playGame').addEventListener('click', () => {
    // Implement code to launch the interactive game.
    alert('Launching Interactive Game...');
});

document.getElementById('joinCommunity').addEventListener('click', () => {
    // Implement code to join the community.
    alert('Joining Community...');
});

// Get the button and links element
const exploreModulesBtn = document.getElementById('exploreModules');
const moduleLinks = document.getElementById('moduleLinks');

// When the user clicks the button, toggle the visibility of the links
exploreModulesBtn.addEventListener('click', () => {
    if (moduleLinks.style.display === 'none' || moduleLinks.style.display === '') {
        moduleLinks.style.display = 'block';
    } else {
        moduleLinks.style.display = 'none';
    }
});
