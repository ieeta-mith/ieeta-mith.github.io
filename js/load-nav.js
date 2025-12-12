// Load navigation from nav.html
fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-container').innerHTML = data;
        // Initialize mobile menu after nav is loaded
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }
    })
    .catch(error => console.error('Error loading navigation:', error));

