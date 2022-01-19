export interface Todo {
    id?: number;
    description: string;
    isCompleted: boolean;
}

export default class TodoService implements Todo {
    id?: number;
    description: string;
    isCompleted: boolean;

    constructor(description: string, isCompleted: boolean = false, id?: number) {
        this.description = description;
        this.isCompleted = isCompleted;
        this.id = id;
    }

    toggleState(): void {
        this.isCompleted = !this.isCompleted;
    }
}