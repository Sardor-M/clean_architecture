import {Todo} from "../../Domain/Model/Todo";

export default interface TodoDataSource {
    getAll(): Promise<Todo[]>;

    createTodo(value: string): Promise<Todo>;

    // editTodo (id: number, newText: string) : Promise<Todo>;

    toggleTodoCheck(id: string): Promise<boolean>;

    removeTodo(id: string): Promise<boolean>;
}