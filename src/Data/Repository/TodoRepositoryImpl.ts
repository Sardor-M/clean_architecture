import TodoDataSource from "../DataSource/TodoDataSource";
import {Todo} from "../../Domain/Model/Todo";

export class TodoRepositoryImpl {
     dataSource: TodoDataSource;

     constructor(_dataSource: TodoDataSource){
         this.dataSource = _dataSource;
     }

     async getAll() : Promise<Todo[]> {
         return this.dataSource.getAll();
     }
}