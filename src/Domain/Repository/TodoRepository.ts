import {Todo} from "../Model/Todo";

export interface TodoRepository{
    getAll(): Promise<Todo[]>;
}