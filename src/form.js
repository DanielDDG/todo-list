import { retrievedElements } from "./elements";
import { projectArray } from "./elements";

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

        retrievedElements.editClose.addEventListener('click', () => {
            retrievedElements.editTaskModal.classList.toggle('hidden');
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
            const task = new TaskCreator(taskName.value, description.value, dueDate.value, priority.value, projectOption.value);
            new CreateTaskUI(task);
            retrievedElements.modal.classList.toggle('hidden');
        });

        retrievedElements.projectModal.addEventListener('submit', (event) => {
            event.preventDefault();
            let newProject = document.createElement('div');
            let newOptionOne = document.createElement('option');
            let newOptionTwo = document.createElement('option');
            let projectNameLowercase = projectName.value.toLowerCase();

            newProject.className = 'project';
            newProject.id = projectNameLowercase + 'Project';
            newProject.textContent = projectName.value;
            newOptionOne.value = projectName.value;
            newOptionOne.textContent = projectName.value;
            newOptionTwo.value = projectName.value;
            newOptionTwo.textContent = projectName.value;

            retrievedElements.projectContainer.insertBefore(newProject, addProject);
            retrievedElements.projectOption.appendChild(newOptionOne);
            retrievedElements.editProjectOption.appendChild(newOptionTwo);
            retrievedElements.projectModal.classList.toggle('hidden');

            newProject.tabIndex = newProject.previousElementSibling.tabIndex + 1;
            projectArray.push(newProject);
        });
    }
}

export class CreateTaskUI {
    constructor(task) {
        this.createTaskUI(task);
    }

    createTaskUI(task) {

        retrievedElements.noTasksContainer ? retrievedElements.noTasksContainer.style.display = 'none' : console.log('No tasks');

        let UITaskContainer = document.createElement('div');
        let leftTaskElements = document.createElement('div');
        let rightTaskElements = document.createElement('div');
        let UITaskName = document.createElement('div');
        let UIDescription = document.createElement('div');
        let UIDueDate = document.createElement('div');
        let UIPriority = document.createElement('div');
        let UIEditContainer = document.createElement('div');
        let UIEditSymbol = document.createElement('i');

        UITaskName.textContent = task.title;
        UIDescription.textContent = task.description;
        UIDueDate.textContent = task.due;
        UIPriority.textContent = task.priority;

        retrievedElements.mainTaskContainer.appendChild(UITaskContainer);
        UITaskContainer.appendChild(leftTaskElements);
        UITaskContainer.appendChild(rightTaskElements);
        leftTaskElements.appendChild(UITaskName);
        leftTaskElements.appendChild(UIDescription);
        rightTaskElements.appendChild(UIDueDate);
        rightTaskElements.appendChild(UIPriority);
        rightTaskElements.appendChild(UIEditContainer);
        UIEditContainer.appendChild(UIEditSymbol);

        UITaskContainer.className = 'UITaskContainer ' + task.project;
        leftTaskElements.className = 'leftTaskElements';
        rightTaskElements.className = 'rightTaskElements';
        UITaskName.className = 'UITaskName';
        UIDescription.className = 'UIDescription';
        UIDueDate.className = 'UIDueDate';
        UIPriority.className = 'UIPriority';
        UIEditContainer.className = 'UIEditContainer';
        UIEditSymbol.className = 'gg-menu-boxed';

        if (task.priority === 'Normal') {
            UIPriority.style.backgroundColor = 'lightgreen';
        } else if (task.priority === 'Important') {
            UIPriority.style.backgroundColor = 'rgb(214, 228, 91)';
        } else {
            UIPriority.style.backgroundColor = 'rgb(194, 91, 91)';
        }

        const containers = document.getElementsByClassName('UITaskContainer');
        const containerArray = Array.from(containers);

        UIEditSymbol.addEventListener('click', (event) => {
            event.preventDefault();

            retrievedElements.editTaskName.value = UITaskName.textContent;
            retrievedElements.editDueDate.value = UIDueDate.textContent;
            retrievedElements.editDescription.value = UIDescription.textContent;
            retrievedElements.editPriority.value = UIPriority.textContent;
            retrievedElements.editProjectOption.value = task.project;
            retrievedElements.editTaskModal.classList.remove('hidden');
            UITaskContainer.classList.add('active');
        })

        retrievedElements.editButton.addEventListener('click', (event) => {
            event.preventDefault();

            containerArray.forEach((container) => {
                if (container.classList.contains('active')) {
                    let name = container.querySelector('.UITaskName');
                    let dueDate = container.querySelector('.UIDueDate');
                    let description = container.querySelector('.UIDescription');
                    let priority = container.querySelector('.UIPriority');

                    console.log(name.textContent);

                    name.textContent = retrievedElements.editTaskName.value;
                    dueDate.textContent = retrievedElements.editDueDate.value;
                    description.textContent = retrievedElements.editDescription.value;
                    priority.textContent = retrievedElements.editPriority.value;

                    if (priority.textContent === 'Normal') {
                        priority.style.backgroundColor = 'lightgreen';
                    } else if (priority.textContent === 'Important') {
                        priority.style.backgroundColor = 'rgb(214, 228, 91)';
                    } else {
                        priority.style.backgroundColor = 'rgb(194, 91, 91)';
                    }

                    container.classList.remove(container.classList.item(1));
                    container.classList.add(retrievedElements.editProjectOption.value);
                }
                container.classList.remove('active');
            })

            /*

            if (retrievedElements.editTaskName.value == UITaskName.textContent) {
                UITaskName.textContent = retrievedElements.editTaskName.value;
                UIDueDate.textContent = retrievedElements.editDueDate.value;
                UIDescription.textContent = retrievedElements.editDescription.value;
                UIPriority.textContent = retrievedElements.editPriority.value;
                task.project = retrievedElements.editProjectOption.value;
            }

            */

            retrievedElements.editTaskModal.classList.add('hidden');
            UITaskContainer.classList.remove('active');
        })

        retrievedElements.editClose.addEventListener('click', () => {
            retrievedElements.editTaskModal.classList.add('hidden');
            UITaskContainer.classList.remove('active');
        })

        retrievedElements.deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            UITaskContainer.remove();
            retrievedElements.editTaskModal.classList.add('hidden');
        });
    }
}

export class EditTaskUI {
    constructor(container){
        this.container = container;
        this.deleteTask();
    }

    deleteTask() {
        retrievedElements.deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.container.remove();
            retrievedElements.editTaskModal.classList.add('hidden');
        })
    }
}