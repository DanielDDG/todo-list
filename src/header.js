export class Header {
    constructor() {
        this.toggleHamburger();
        this.toggleDarkMode();
    }

    toggleHamburger() {
        const hamburger = document.getElementById('hamburger');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('change');
        });
    }

    toggleDarkMode() {
        const toggleContainer = document.getElementById('toggleContainer');
        toggleContainer.addEventListener('click', () => {
            document.body.classList.toggle('darkmode');
        });
    }
};