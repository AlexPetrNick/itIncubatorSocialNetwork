import React, {FC} from 'react';
import './App.css';
import './style.css'
import {Header} from "./common/component/header/Header";
import {NavBar} from "./common/component/navbar/NavBar";
import {Profile} from "./common/component/profile/Profile";
import {Dialogs} from "./common/component/dialogs/Dialogs";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {actionType, stateType} from "./common/types/Types";

type AppData = {
    state: stateType
    dispatch: (action:actionType) => void
}


export const App: FC<AppData> = ({dispatch, ...props}) => {


    return (
        <Router>
            <div className="App">
                <Header/>
                <div className={"wrapper__content"}>
                    <NavBar/>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs
                            state={props.state.dialogsData}
                        />}/>
                        <Route path={'/profile'} element={<Profile
                            state={props.state}
                            dispatch={dispatch}
                        />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
