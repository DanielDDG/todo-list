export class CreateHamburgerContent {
    constructor(){
        this.slideBurger();
    }

    slideBurger() {
        const content = document.getElementsByClassName('content')[0];
        const mainContent = document.getElementById('mainContent');
        const hamburgerContent = document.getElementById('hamburgerContent');
        const hamburgerButton = document.getElementById('hamburger');

        hamburgerButton.addEventListener('click', () => {
            if (hamburgerContent.className == 'hidden') {
                setTimeout(() => {
                    mainContent.style.left = '20%';
                    hamburgerContent.style.left = '0%';
                }, 1)
                hamburgerContent.classList.toggle('hidden');
                content.classList.toggle('templateReset');
            } else {
                mainContent.style.left = '0%';
                hamburgerContent.style.left = '-100%';
                setTimeout(() => {
                    hamburgerContent.classList.toggle('hidden');
                    content.classList.toggle('templateReset');
                }, 800)
            }
        });
    }
}