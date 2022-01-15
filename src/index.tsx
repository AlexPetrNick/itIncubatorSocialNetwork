import React from 'react';
import './index.css';
import {rerenderEntireTreeType, stateType} from "./common/types/Types";
import {store} from './common/redux/state'
import ReactDOM from "react-dom";
import {App} from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store._state}
            dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root')
    );
}

rerenderEntireTree()

store.callSubsriber(rerenderEntireTree)