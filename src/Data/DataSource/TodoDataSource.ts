import {Todo} from "../../Domain/Model/Todo";

export default interface TodoDataSource {
    getAll(): Promise<Todo[]>
}