import { Todo } from "./TodoService";

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

    updateTodo(todo: Todo): void {
        const todoList = this.todoList.filter(item => item.id !== todo.id);

        this.todoList = [...todoList, todo];
    }

    deleteTodo(todo: Todo): void {
        const todoList = this.todoList.filter(item => item.id !== todo.id);

        this.todoList = todoList;
    }
}