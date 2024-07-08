import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Title & Heading font family: Supports weights 100-900
import '@fontsource-variable/archivo'; 

// Body font family: Supports weights 100-400
import '@fontsource/barlow/100.css';
import '@fontsource/barlow/200.css';
import '@fontsource/barlow/300.css';
import '@fontsource/barlow/400.css';

import './styles/index.scss'

import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
