import React, {useState} from "react";
import {TodoRepositoryImpl} from "../../../Data/Repository/TodoRepositoryImpl";
import TodoAPIDataSource from "../../../Data/DataSource/API/TodoAPIDataSource";
import {Todo} from "../../../Domain/Model/Todo";
import {GetTodos} from "../../../Domain/UseCase/Todo/GetTodos";
import {CreateTodo} from "../../../Domain/UseCase/Todo/CreateTodo";
import {ToggleCheckTodo} from "../../../Domain/UseCase/Todo/ToggleCheckTodo";
import {RemoveTodo} from "../../../Domain/UseCase/Todo/RemoveTodo";
import {toast} from "react-toastify";
import TodoAPIDataSourceImpl from "../../../Data/DataSource/API/TodoAPIDataSource";

export default function TodoListViewModel() {

    // setting up the states for the todos and the value
    const [todos, setTodos] = useState<Todo[]>([]);
    const [value, setValue] = useState("");

    const todosDataSourceImpl = new TodoAPIDataSourceImpl();
    const todosRepositoryImpl = new TodoRepositoryImpl(todosDataSourceImpl);

    // creating the use case
    const UseCase = new GetTodos(todosRepositoryImpl);
    const createTodoUseCase = new CreateTodo(todosRepositoryImpl);
    const toggleCheckTodoUseCase = new ToggleCheckTodo(todosRepositoryImpl);
    const removeTodosUseCase = new RemoveTodo(todosRepositoryImpl);

    async function getAll() {
        setTodos(await UseCase.invoke());
    }

    function _resetValue() {
        setValue("");
    }

    async function createTodo() {
        try {
            const createdTodo = await createTodoUseCase.invoke(value);
            setTodos((prev) => [...prev, createdTodo]);
            _resetValue();
        } catch (e) {
            _resetValue();
            if (e instanceof Error) {
                toast(e.message);
            }
        }
    }

    async function removeTodo(id: string) {
        const isRemoved = await removeTodosUseCase.invoke(id);
        if (isRemoved) {
            setTodos((prev) => {
                return [...prev.filter((i) => i.id !== id)];
            });
        }
    }

    async function toggleRead(id: string) {
        const createdTodo = await toggleCheckTodoUseCase.invoke(id);
        setTodos((prev) =>
            [...prev.map((i) => {
                const isToggled = i.id === id;

                return {
                    ...i,
                    isCompleted: isToggled ? createdTodo : i.isCompleted
                };
            })
        ]);
    }

    function onChangeValue(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setValue(e.target.value);
    }


    return {
        getAll,
        onChangeValue,
        createTodo,
        toggleRead,
        removeTodo,
        todos,
        value,
    }

}