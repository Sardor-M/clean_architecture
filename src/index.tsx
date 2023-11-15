import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename="clean_architecture">
        <ThemeProvider>
            <App/>
        </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

