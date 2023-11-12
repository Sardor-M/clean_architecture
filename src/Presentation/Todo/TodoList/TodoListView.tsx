import React, {useEffect} from 'react';
import {Checkbox, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import useViewModel from "./TodoListViewModel";

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
        <List >
            <h1 className="text-xl font-bold">Hello Tailwind!</h1>
            <input
                className="text-xl font-bold"
                onChange={onChangeValue}
                placeholder="add your todo"
                type="text"
                value={value}
            />
            <button onClick={createTodo} className="text-xl font-bold"> Add</button>
            {todos.map((todo, i) => {
                return (
                    <ListItem key={i}>
                        <ListItemIcon>
                            <Checkbox
                                checked={todo.isCompleted}
                                onChange={() => toggleRead(todo.id)}
                            />
                        </ListItemIcon>
                        <ListItemText primary={todo.title}/>
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </ListItem>
                );
            })}
        </List>
    );
}