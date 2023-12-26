import { retrievedElements } from "./elements";
import { taskArray } from "./elements";

export class FormButtons {
    constructor() {
        this.toggleForm();
        this.closeForm();
    }

    toggleForm() {
        retrievedElements.addTask.addEventListener('click', () => {
            retrievedElements.modal.classList.toggle('hidden');
        });

        retrievedElements.addProject.addEventListener('click', () => {
            retrievedElements.projectModal.classList.toggle('hidden');
        })
    }

    closeForm() {
        retrievedElements.close.addEventListener('click', () => {
            retrievedElements.modal.classList.toggle('hidden');
        })

        retrievedElements.projectClose.addEventListener('click', () => {
            retrievedElements.projectModal.classList.toggle('hidden');
        })
    }
}

export class TaskCreator {
    constructor(title, description, due, priority, project) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.project = project;
    }
}

export class RetrieveValues {
    constructor() {
        this.retrieveValues();
    }

    retrieveValues() {
        retrievedElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            const task = new TaskCreator(taskName.value, description.value, dueDate.value, priority.value, project.value);
            new CreateTaskUI(task);
            retrievedElements.modal.classList.toggle('hidden');
        });

        retrievedElements.projectModal.addEventListener('submit', (event) => {
            event.preventDefault();
            let newProject = document.createElement('div');
            let newTaskContainer = document.createElement('div');
            let newOption = document.createElement('option');
            let projectNameLowercase = projectName.value.toLowerCase();

            newProject.id = projectNameLowercase + 'Project';
            newProject.textContent = projectName.value;
            newTaskContainer.className = projectNameLowercase + ' hidden';
            newOption.value = projectName.value;
            newOption.textContent = projectName.value;

            retrievedElements.projectContainer.insertBefore(newProject, addProject);
            retrievedElements.mainContainer.appendChild(newTaskContainer);
            retrievedElements.project.appendChild(newOption);
            retrievedElements.projectModal.classList.toggle('hidden');

            newProject.tabIndex = newProject.previousElementSibling.tabIndex + 1;
        });
    }
}

export class CreateTaskUI {
    constructor(task) {
        this.createTaskUI(task);
        this.leftTaskElements = null;
        this.rightTaskElements = null;
        this.UITaskName = null;
        this.UIDescription = null;
        this.UIDueDate = null;
        this.UIPriority = null;
    }

    createTaskUI(task) {

        retrievedElements.noTasksContainer ? retrievedElements.noTasksContainer.style.display = 'none' : console.log('No tasks');

        this.leftTaskElements = document.createElement('div');
        this.rightTaskElements = document.createElement('div');
        this.UITaskName = document.createElement('div');
        this.UIDescription = document.createElement('div');
        this.UIDueDate = document.createElement('div');
        this.UIPriority = document.createElement('div');

        this.UITaskName.textContent = task.title;
        this.UIDescription.textContent = task.description;
        this.UIDueDate.textContent = task.due;
        this.UIPriority.textContent = task.priority;

        this.assignContainer(task.project);
    }

    assignContainer(container) {

        let containerHolder = container;
        let lowercasedContainer = containerHolder.toLowerCase();
        let element = document.getElementsByClassName(lowercasedContainer)[0];

        if (element != null) {
            let newTaskName = document.createElement('div');
            newTaskName.className = 'UITaskContainer';
            element.appendChild(newTaskName);
            newTaskName.appendChild(this.leftTaskElements);
            newTaskName.appendChild(this.rightTaskElements);
        } else {
            let newContainer = document.createElement('div');
            let newTaskName = document.createElement('div');
            newContainer.className = lowercasedContainer + ' hiddenProject';
            newTaskName.className = 'UITaskContainer';
            retrievedElements.mainContainer.appendChild(newContainer);
            newContainer.appendChild(newTaskName);
            newTaskName.appendChild(this.leftTaskElements);
            newTaskName.appendChild(this.rightTaskElements);
        }

        this.leftTaskElements.appendChild(this.UITaskName);
        this.leftTaskElements.appendChild(this.UIDescription);
        this.rightTaskElements.appendChild(this.UIDueDate);
        this.rightTaskElements.appendChild(this.UIPriority);

        this.leftTaskElements.className = 'leftTaskElements';
        this.rightTaskElements.className = 'rightTaskElements';
        this.UITaskName.id = 'UITaskName'; 
        this.UIDescription.id = 'UIDescription';
        this.UIDueDate.className = 'UIDueDate'; 
        this.UIPriority.id = 'UIPriority';
    }
}