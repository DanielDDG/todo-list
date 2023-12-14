import retrievedElements from "./elements";

export class FormButtons {
    constructor() {
        this.toggleForm();
        this.closeForm();
    }

    toggleForm() {
        retrievedElements.addProject.addEventListener('click', () => {
            retrievedElements.modal.classList.toggle('hidden');
        });
    }

    closeForm() {
        retrievedElements.close.addEventListener('click', () => {
            retrievedElements.modal.classList.toggle('hidden');
        })
    }
}

export class TaskCreator {
    constructor(title, description, due, priority) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
    }
}

export class RetrieveValues {
    constructor() {
        this.retrieveValues();
    }

    retrieveValues() {
        retrievedElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            const task = new TaskCreator(taskName.value, description.value, dueDate.value, priority.value);
            new CreateTaskUI(task);
            retrievedElements.modal.classList.toggle('hidden');
        });
    }
}

export class CreateTaskUI {
    constructor(task) {
        this.createTaskUI(task);
    }

    createTaskUI(task) {

        retrievedElements.taskDisplay ? retrievedElements.taskDisplay.style.display = 'none' : console.log('No tasks');

        const UITaskContainer = document.createElement('div');
        const leftTaskElements = document.createElement('div');
        const rightTaskElements = document.createElement('div');
        const UITaskName = document.createElement('div');
        const UIDescription = document.createElement('div');
        const UIDueDate = document.createElement('div');
        const UIPriority = document.createElement('div');

        retrievedElements.mainContainer.appendChild(UITaskContainer);
        UITaskContainer.appendChild(leftTaskElements);
        UITaskContainer.appendChild(rightTaskElements);
        leftTaskElements.appendChild(UITaskName);
        leftTaskElements.appendChild(UIDescription);
        rightTaskElements.appendChild(UIDueDate);
        rightTaskElements.appendChild(UIPriority);

        UITaskContainer.className = 'UITaskContainer';
        leftTaskElements.className = 'leftTaskElements';
        rightTaskElements.className = 'rightTaskElements';
        UITaskName.id = 'UITaskName'; 
        UIDescription.id = 'UIDescription';
        UIDueDate.id = 'UIDueDate'; 
        UIPriority.id = 'UIPriority';

        UITaskName.textContent = task.title;
        UIDescription.textContent = task.description;
        UIDueDate.textContent = task.due;
        UIPriority.textContent = task.priority;

    }
}