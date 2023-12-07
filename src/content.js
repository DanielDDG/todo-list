export class CreateHamburgerContent {
    constructor(){
        this.activateBurger();
    }

    activateBurger() {
        const hamburgerContent = document.createElement('div');
        const hamburgerButton = document.getElementById('hamburger');
        const content = document.getElementsByClassName('content')[0];
        let active = true;
        hamburgerContent.id = 'hamburgerContent';

        hamburgerButton.addEventListener('click', () => {
            if (active == true) {
                content.insertBefore(hamburgerContent, mainContent);
                content.classList.toggle('hamburgerActive');
                active = false;
            } else {
                content.removeChild(hamburgerContent);
                content.classList.remove('hamburgerActive');
                active = true;
            }
        });
    }
}