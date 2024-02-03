import { retrievedElements } from "./elements";

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

        Icon.id = 'icon';
        Icon.className = 'gg-sun';

        toggleButton.addEventListener('click', () => {
            if (!document.body.classList.contains('darkmode')) {
                const mode = {
                    color: 'dark',
                }
                const serializedMode = JSON.stringify(mode);
                localStorage.setItem('mode', serializedMode);
                document.body.classList.add('darkmode');
                Icon.className == 'gg-sun' ? Icon.className = 'gg-moon' : Icon.className = 'gg-sun';
            } else {
                const mode = {
                    color: 'light',
                }
                const serializedMode = JSON.stringify(mode);
                localStorage.setItem('mode', serializedMode);
                document.body.classList.remove('darkmode');
                Icon.className == 'gg-sun' ? Icon.className = 'gg-moon' : Icon.className = 'gg-sun';
            }
        });
    }
}