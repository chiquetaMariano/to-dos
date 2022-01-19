/**
 * Specification:
 * In order to manage my tasks
 * As a User
 * I want to be able to create, edit and delete to-do items
 */

import UserService from "../src/services/UserService";
import TodoService from "../src/services/TodoService";

describe("to-do items management", () => {

    it("should create a to-do item", () => {
        let user = new UserService("John Doe");
        let newTodo = new TodoService("lorem ipsum dolor sit amet.");

        user.addTodo(newTodo);

        expect(user.todoList).toContain(newTodo);
    });

    it("should edit a to-do item", () => {
        
    });

    it("should delete a to-do item", () => {
        
    });
});