import React from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import TodoListView from "./Presentation/Todo/TodoList/TodoListView";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App" >
            <ToastContainer/>
            <TodoListView/>
        </div>
    );
}

export default App;
