import React, {useEffect} from 'react';
import useViewModel from "./TodoListViewModel";
import {Button} from '@material-tailwind/react';
import {List, ListItem, Checkbox, ListItemSuffix,} from '@material-tailwind/react';
import {ListItemText} from "@mui/material";

export default function TodoListView() {

    const {
        getAll,
        todos,
        createTodo,
        onChangeValue,
        value,
        removeTodo,
        toggleRead
    } = useViewModel();

    useEffect(() => {
        getAll();
    }, []);


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="m-auto p-5 w-full md:w-1/3 ld:w-2/5">
                {/*"m-auto p-5 w-full md:w-3/4 lg:w-1/2"*/}
                <h1 className="text-2xl font-bold text-left">Organize your To-dos </h1>

                <div className="flex mt-4">
                    <input
                        className=" justify-center text- w-full p-2 border-2 border-gray-300 rounded-md"
                        onChange={onChangeValue}
                        placeholder="add your todo"
                        type="text"
                        value={value}
                    />
                    <Button
                        color="amber"
                        className="md:w-1/5 ml-5"
                        onClick={createTodo}
                        variant="gradient"
                    > Add
                    </Button>
                </div>
                <List>
                    {todos && todos.map((todo, i) => {
                        return (
                            <ListItem key={i}>
                                <ListItemSuffix>
                                    <Checkbox
                                        color="green"
                                        checked={todo.isCompleted}
                                        onChange={() => toggleRead(todo.id)}
                                        crossOrigin={undefined}
                                    />
                                </ListItemSuffix>
                                <ListItemText primary={todo.title}/>
                                <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </div>
    );
}