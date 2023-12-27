import { retrievedElements } from "./elements";

export class FilterTasks {
    constructor() {
        this.filterTasks();
    }

    filterTasks() {
        retrievedElements.allLabel.click();
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDate();
        let formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;
        
        retrievedElements.allLabel.addEventListener('click', () => {
            let taskArray = document.querySelectorAll('.UITaskContainer');
            taskArray.forEach((task) => {
                task.classList.remove('hidden');
            })
        })

        retrievedElements.todayLabel.addEventListener('click', () => {
            let taskArray = document.querySelectorAll('.UITaskContainer');

            taskArray.forEach((task) => {
                let rightElements = task.querySelectorAll('.rightTaskElements');
                rightElements.forEach((rightElement) => {
                    let dueDates = rightElement.querySelectorAll('#UIDueDate')
                    dueDates.forEach((date) => {
                        if (formattedDate != date.textContent) {
                            task.classList.add('hidden');
                        } else {
                            task.classList.remove('hidden');
                        }
                    })
                })
            })
        })
    }
}