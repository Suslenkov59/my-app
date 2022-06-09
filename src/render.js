import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";

export let renderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <App posts={state.profilePage.posts}
             dialogs={state.dialogsPage.dialogs}
             messages={state.dialogsPage.messages}
             sidebar={state.sidebarInfo.sidebar}
             addPost={ () => ("")}
        />
    </React.StrictMode>,
    document.getElementById('root'));
}

reportWebVitals();
