import TodoDataSource from "../TodoDataSource";
import {Todo} from "../../../Domain/Model/Todo";
import {TodoAPIEntity} from "./Entity/TodoAPIEntity";
import localDB from "./LocalDB";

export default class TodoAPIDataSourceImpl implements TodoDataSource {

    db = localDB<TodoAPIEntity>("todos");

    async getAll(): Promise<Todo[]> {
        const data = this.db?.getAllData();
        return data?.map((item)=> ({
            id: item.id,
            title: item.title,
            isCompleted: item.isCompleted
        }));
    }

    async createTodo (value: string){
        const res: Todo = {
            id: new Date().getSeconds().toString(),
            isCompleted: false,
            title: value
        };

        this.db.create({
            id: res.id,
            isCompleted: res.isCompleted,
            title: res.title
        })

        return res;
    }

    async toggleTodoCheck(id: string){
       const item = this.db.updateByField(id, "isCompleted", "toggle");
       return item.isCompleted;
    }

    async removeTodo (id: string){
        return this.db.removeById(id);
    }
}