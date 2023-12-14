import retrievedElements from "./elements";

export class CreateHamburger {
    constructor() {
        this.toggleHamburger();
    }

    toggleHamburger() {
        retrievedElements.hamburger.addEventListener('click', () => {
            retrievedElements.hamburger.classList.toggle('change');
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