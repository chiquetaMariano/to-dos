/**
 * Specification:
 * In order to know which to-do items I have completed
 * As a user
 * I want to mark/unmark to-do items as completed.
 */

import TodoService from "../src/services/TodoService"; 

describe("Mark/Unmark to-do items", () => {

    let todo = new TodoService("lorem ipsum dolor sit amet.");

    it("should be incomplete", () => {
        expect(todo.isCompleted).toBe(false);
    });

    it("should mark to-do as completed", () => {
        todo.toggleState();
        expect(todo.isCompleted).toBe(true);
    });

    it("should unmark to-do as complete", () => {
        todo.toggleState();
        expect(todo.isCompleted).toBe(false);        
    });
});