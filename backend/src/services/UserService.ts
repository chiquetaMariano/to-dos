import { Todo } from "./TodoService";
import db from "../../models";

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

    async getTodos(): Promise<Todo[]> {
        // TODO: use logged in user
        const user = await db.User.findOne({where: { id: 138 }});
        let todos = await user.getTodos();
        return todos;
    }
}