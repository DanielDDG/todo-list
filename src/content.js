export class CreateBurgerSliding {
    constructor(){
        this.slideBurger();
    }

    slideBurger() {
        const content = document.getElementsByClassName('content')[0];
        const mainContent = document.getElementsByClassName('mainContent')[0];
        const hamburgerContent = document.getElementById('hamburgerContent');
        const hamburgerButton = document.getElementById('hamburger');

        // Temporarily removing hidden and template reset from HTML.

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


