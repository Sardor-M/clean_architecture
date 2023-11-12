import {Todo} from "../../Model/Todo";
import {TodoRepository} from "../../Repository/TodoRepository";

export interface CreateTodoUseCase {
    invoke: (value: string) => Promise<Todo>;
}

export class CreateTodo implements CreateTodoUseCase {
    private todoRepo: TodoRepository;

    constructor(_todoRepo: TodoRepository) {
        this.todoRepo = _todoRepo;
    }

    async invoke(value: string) {
        if (value.length < 2) {
            throw new Error("Your todo should have at least 2 characters. ");
        }
        const created = this.todoRepo.createTodo(value);
        return created;
    }
}