import { retrievedElements } from "./elements";
import { TaskCreator } from "./form";
import { CreateTaskUI } from "./form";

export class Storage {
    constructor() {
        this.load();
    }

    load() {

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const parsedTask = JSON.parse(value);
            console.log(parsedTask);
            
            const task = new TaskCreator(parsedTask.title, parsedTask.description, parsedTask.due, parsedTask.priority, parsedTask.project);
            new CreateTaskUI(task);
        }

    }
}
