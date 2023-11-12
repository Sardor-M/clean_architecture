import React, {useEffect} from 'react';
import {Checkbox, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useViewModel} from "./TodoListViewModel";
export default function TodoListView() {

    const {getTodoList, todos} = useViewModel();

    useEffect(() => {
        getTodoList();
    }, []);


    return (
        <List>
            {todos.map((todo, i) => {
                return <ListItem key={i}>
                    <ListItemIcon>
                        <Checkbox
                            checked={todo.isCompleted}
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo.title}/>
                </ListItem>
            })}
        </List>
    )
}