import { retrievedElements } from "./elements";

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

        this.UITaskContainer = document.createElement('div');
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

        retrievedElements.mainTaskContainer.appendChild(this.UITaskContainer);
        this.UITaskContainer.appendChild(this.leftTaskElements);
        this.UITaskContainer.appendChild(this.rightTaskElements);
        this.leftTaskElements.appendChild(this.UITaskName);
        this.leftTaskElements.appendChild(this.UIDescription);
        this.rightTaskElements.appendChild(this.UIDueDate);
        this.rightTaskElements.appendChild(this.UIPriority);

        this.UITaskContainer.className = 'UITaskContainer';
        this.leftTaskElements.className = 'leftTaskElements';
        this.rightTaskElements.className = 'rightTaskElements';
        this.UITaskName.id = 'UITaskName';
        this.UIDescription.id = 'UIDescription';
        this.UIDueDate.id = 'UIDueDate';
        this.UIPriority.id = 'UIPriority';

    }
}