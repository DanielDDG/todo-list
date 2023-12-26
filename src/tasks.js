import { retrievedElements } from "./elements";

export class FilterTasks {
    constructor() {
        this.filterTasks();
    }

    filterTasks() {
        let currentDate = new Date();

        document.addEventListener('DOMContentLoaded', () => {
            retrievedElements.allLabel.click();
            retrievedElements.allLabel.focus();
            retrievedElements.allLabel.classList.add('focused');

            retrievedElements.hamburgerContainer.addEventListener('focusin', (event) => {
                let focusedElement = event.target;

                if (focusedElement != retrievedElements.allLabel) {
                    retrievedElements.allLabel.classList.remove('focused');
                    retrievedElements.all.classList.add('hiddenProject');
                }
            })
        })

        retrievedElements.allLabel.addEventListener('click', () => {
            const hiddenElements = document.querySelectorAll('.hiddenProject');
            console.log(hiddenElements);

            hiddenElements.forEach(hiddenElement => {
                if (hiddenElement.hasChildNodes()) {
                    hiddenElement.classList.remove('hiddenProject');
                    hiddenElement.classList.add('inline');
                }
            })


        })
    }
}