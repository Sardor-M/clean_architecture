import {useState} from "react";
import {TodoRepositoryImpl} from "../../../Data/Repository/TodoRepositoryImpl";
import TodoAPIDataSourceImp from "../../../Data/DataSource/API/TodoAPIDataSourceImp";
import {Todo} from "../../../Domain/Model/Todo";
import {GetTodosUseCase} from "../../../Domain/UseCase/Todo/GetTodos";

export default function TodoListViewModel() {

    const [todos, setTodos] = useState<Todo[]>([]);


    const UseCase = new GetTodosUseCase(new TodoRepositoryImpl(new TodoAPIDataSourceImp()));

    async function getToDoList() {
        setTodos(await UseCase.invoke());
    }

    return
        {
            getToDoList,
            todos
        }

}