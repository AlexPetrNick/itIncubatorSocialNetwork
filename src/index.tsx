import React from 'react';
import './index.css';
import {stateType} from "./common/types/Types";
import store from './common/redux/redux-store'
import ReactDOM from "react-dom";
import {App} from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
