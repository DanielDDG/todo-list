import { retrievedElements } from "./elements";

export class CreateBurgerSliding {
    constructor(){
        this.slideBurger();
    }

    slideBurger() {

        // Temporarily removing hidden and template reset from HTML.

        retrievedElements.hamburgerButton.addEventListener('click', () => {
            if (retrievedElements.hamburgerContent.className == 'hidden') {
                setTimeout(() => {
                    retrievedElements.mainContent.style.left = '20%';
                    retrievedElements.hamburgerContent.style.left = '0%';
                }, 1)
                retrievedElements.hamburgerContent.classList.toggle('hidden');
                retrievedElements.content.classList.toggle('templateReset');
            } else {
                retrievedElements.mainContent.style.left = '0%';
                retrievedElements.hamburgerContent.style.left = '-100%';
                setTimeout(() => {
                    retrievedElements.hamburgerContent.classList.toggle('hidden');
                    retrievedElements.content.classList.toggle('templateReset');
                }, 800)
            }
        });
    }
}


