import TodoDataSource from "../TodoDataSource";
import {Todo} from "../../../Domain/Model/Todo";
import {TodoAPIEntity} from "./Entity/TodoAPIEntity";

const BASE_URL="https://jsonplaceholder.typicode.com"

interface TypedResponse<T = any> extends Response {
    json <P = T >(): Promise<P>;
}

function fetchTodos<T>(...args: any): Promise<TypedResponse<T>>{
    return fetch.apply(window, args);
}

export default class TodoAPIDataSourceImp implements TodoDataSource {
    async getAll(): Promise<Todo[]> {
        let response = await fetchTodos<TodoAPIEntity[]>(`${BASE_URL}/todos`);
        let data = await response.json();
        return data.map((item) => ({
            id: item.id,
            title: item.title,
            isCompleted: item.isCompleted,
        }));
    }
}