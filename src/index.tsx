import React from 'react';
import './index.css';
import {stateType} from "./common/types/Types";
import {store} from './common/redux/state'
import ReactDOM from "react-dom";
import {App} from "./App";

let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App
            store={state}
            dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)