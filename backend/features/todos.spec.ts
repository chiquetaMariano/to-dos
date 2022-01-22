/**
 * Specification:
 * In order to manage my tasks
 * As a User
 * I want to be able to create, edit and delete to-do items
 */

import UserService from "../src/services/UserService";
import TodoService from "../src/services/TodoService";

describe("to-do items management", () => {

    let user = new UserService("John Doe");
    let todo = new TodoService("lorem ipsum dolor sit amet.", false, 250);

    it("should create a to-do item", () => {
        user.addTodo(todo);
        expect(user.todoList).toContain(todo);
    });

    it("should edit a to-do item", () => {
        let newTodo = new TodoService("My new to-do description", false, 250);
        user.updateTodo(newTodo);

        expect(user.todoList.length).toBe(1);
        expect(user.todoList).toContain(newTodo);
    });

    it("should delete a to-do item", () => {
        user.deleteTodo(todo);

        expect(user.todoList).not.toContain(todo);
        expect(user.todoList.length).toBe(0);
    });
});