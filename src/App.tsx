import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ToastContainer} from 'react-toastify';
import TodoListView from "./Presentation/Todo/TodoList/TodoListView";

function App() {
    return (
        <div className="App">
            <ToastContainer/>
            <TodoListView/>
        </div>
    );
}

export default App;
