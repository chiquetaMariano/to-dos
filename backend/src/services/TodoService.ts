export interface Todo {
    description: string;
    isCompleted: boolean;
}

export default class TodoService implements Todo {
    description: string;
    isCompleted: boolean;

    constructor(description: string, isCompleted: boolean = false) {
        this.description = description;
        this.isCompleted = isCompleted;
    }
}