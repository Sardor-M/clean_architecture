import TodoDataSource from "../DataSource/TodoDataSource";
import {TodoRepository} from "../../Domain/Repository/TodoRepository";

export class TodoRepositoryImpl implements TodoRepository {
    dataSource: TodoDataSource;

    constructor(_dataSource: TodoDataSource) {
        this.dataSource = _dataSource;
    }

    async getAll() {
        return this.dataSource.getAll();
    }

    async createTodo(value: string) {
        return this.dataSource.createTodo(value);
    }

    async markAsRead(id: string) {
        return this.dataSource.toggleTodoCheck(id);
    }

    async removeTodo(id: string) {
        return this.dataSource.removeTodo(id);
    }
}