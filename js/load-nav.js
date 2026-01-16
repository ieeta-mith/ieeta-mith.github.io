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
        // Set GitHub link URL from project config
        const githubLink = document.getElementById('github-link');
        const githubLinkMobile = document.getElementById('github-link-mobile');
        if (typeof GITHUB_BASE_URL !== 'undefined') {
            if (githubLink) githubLink.href = GITHUB_BASE_URL;
            if (githubLinkMobile) githubLinkMobile.href = GITHUB_BASE_URL;
        }
    })
    .catch(error => console.error('Error loading navigation:', error));

