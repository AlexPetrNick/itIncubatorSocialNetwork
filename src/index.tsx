import React from 'react';
import './index.css';
import {addPost, state, subscribe, updateTextProfile} from './common/redux/state'
import {rerenderEntireTreeType, stateType} from "./common/types/Types";
import ReactDOM from "react-dom";
import {App} from "./App";

let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateTextProfile={updateTextProfile}
        />, document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)