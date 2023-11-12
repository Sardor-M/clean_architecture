
import { Todo } from "../../Model/Todo";
import {TodoRepository} from "../../Repository/TodoRepository";

export  interface GetTodosUseCase{
    invoke :() => Promise<Todo[]>
}

export class GetTodos implements GetTodosUseCase {
    private todoRepository: TodoRepository;
    constructor(_todoRepository: TodoRepository) {
        this.todoRepository = _todoRepository;
    }

    async invoke(){
        return this.todoRepository.getAll();
    }
}