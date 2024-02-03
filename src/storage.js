import { retrievedElements } from "./elements";
import { TaskCreator } from "./form";
import { CreateTaskUI } from "./form";
import { projectArray } from "./elements";

export class Storage {
    constructor() {
        this.load();
    }

    load() {

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const parsedTask = JSON.parse(value);

            if (key.startsWith('task')) {
                const task = new TaskCreator(parsedTask.title, parsedTask.description, parsedTask.due, parsedTask.priority, parsedTask.project);
                new CreateTaskUI(task);
            } else if (key.startsWith('project')) {
                let projectName = key.slice(9);
                let projectNameCapitalized = projectName.charAt(0).toUpperCase() + projectName.slice(1);
                let newProject = document.createElement('div');
                newProject.className = 'project';
                newProject.id = projectName + 'Project';
                newProject.textContent = projectNameCapitalized;
                retrievedElements.projectContainer.insertBefore(newProject, addProject);
                newProject.tabIndex = newProject.previousElementSibling.tabIndex + 1;
                projectArray.push(newProject);
            } else if (key.startsWith('option')) {
                let projectName = key.slice(8);
                let projectNameCapitalized = projectName.charAt(0).toUpperCase() + projectName.slice(1);
                let newOptionOne = document.createElement('option');
                newOptionOne.value = projectNameCapitalized;
                newOptionOne.textContent = projectNameCapitalized;
                retrievedElements.projectOption.appendChild(newOptionOne);
            } else if (key.startsWith('editOption')) {
                let projectName = key.slice(12);
                let projectNameCapitalized = projectName.charAt(0).toUpperCase() + projectName.slice(1);
                let newOptionTwo = document.createElement('option');
                newOptionTwo.value = projectNameCapitalized;
                newOptionTwo.textContent = projectNameCapitalized;
                retrievedElements.editProjectOption.appendChild(newOptionTwo);
            } else if (key.startsWith('mode')) {
                const icon = document.getElementById('icon');
                if (parsedTask.color == 'light') {
                    if (document.body.classList.contains('darkmode')) {
                        document.body.classList.remove('darkmode');
                        icon.className = 'gg-sun';
                    }
                } else if (parsedTask.color  == 'dark') {
                    if (!document.body.classList.contains('darkmode')) {
                        document.body.classList.add('darkmode');
                        icon.className = 'gg-moon';
                    }
                }
            }
        }

    }
}
