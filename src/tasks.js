import { retrievedElements } from "./elements";
import { projectArray } from "./elements";
const { differenceInHours } = require("date-fns");

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
            retrievedElements.taskbarTitle.textContent = 'All Tasks';
            let taskArray = document.querySelectorAll('.UITaskContainer');
            taskArray.forEach((task) => {
                task.classList.remove('hidden');
            })
        })

        retrievedElements.todayLabel.addEventListener('click', () => {
            retrievedElements.taskbarTitle.textContent = 'Due Today';
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

        retrievedElements.sevenLabel.addEventListener('click', () => {
            retrievedElements.taskbarTitle.textContent = 'Due Within 7 Days';
            let taskArray = document.querySelectorAll('.UITaskContainer');

            taskArray.forEach((task) => {
                let rightElements = task.querySelectorAll('.rightTaskElements');
                rightElements.forEach((rightElement) => {
                    let dueDates = rightElement.querySelectorAll('#UIDueDate')
                    dueDates.forEach((date) => {
                        const dateString = date.textContent.toString();
                        const slicedYear = dateString.slice(0, 4);
                        const slicedMonth = dateString.slice(5, 7);
                        const slicedDay = dateString.slice(8, 10);
                        const result = differenceInHours(
                            new Date(slicedYear, slicedMonth, slicedDay),
                            new Date(currentYear, currentMonth, currentDay)
                        )
                        
                        if (result >= 0 && result <= 168) {
                            task.classList.remove('hidden');
                        } else {
                            task.classList.add('hidden');
                        }
                    })
                })
            })
        })

        this.projectListener();
        const targetNode = retrievedElements.projectContainer;
        const config = { childList: true };

        const callback = (mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    this.projectListener();
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    projectListener() {
        projectArray.forEach((project) => {
            project.addEventListener('click', () => {
                let taskArray = document.querySelectorAll('.UITaskContainer');
                taskArray.forEach((task) => {
                    console.log(task.classList);
                    if (task.classList.contains(project.textContent)) {
                        task.classList.remove('hidden');
                    } else {
                        task.classList.add('hidden');
                    }
                })
            })
        })
    }
}