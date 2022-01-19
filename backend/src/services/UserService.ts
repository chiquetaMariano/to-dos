import Todo from "./TodoService";

export default class UserService {
    name: string;
    todoList: Todo[];

    constructor(name: string, todoList: Todo[] = []) {
        this.name = name;
        this.todoList = todoList;
    }

    addTodo(todo: Todo): void {
        this.todoList.push(todo);
    }
}