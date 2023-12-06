export class CreateHamburger {
    constructor() {
        this.toggleHamburger();
    }

    toggleHamburger() {
        const hamburger = document.getElementById('hamburger');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('change');
        });
    }
};

export class CreateToggleButton {
    constructor() {
        this.createButton();
    }

    createButton() {
        const toggleButton = document.createElement('button');
        const Icon = document.createElement('i');

        toggleContainer.appendChild(toggleButton);
        toggleButton.appendChild(Icon);

        Icon.className = 'gg-sun';

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('darkmode');
            Icon.className == 'gg-sun' ? Icon.className = 'gg-moon' : Icon.className = 'gg-sun';
        });
    }
}