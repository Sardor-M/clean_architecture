import {Todo} from "../Model/Todo";

export interface TodoRepository {
    getAll(): Promise<Todo[]>;

    createTodo(value: string): Promise<Todo>;

    markAsRead(id: string): Promise<boolean>;

    removeTodo(id: string): Promise<boolean>;
}