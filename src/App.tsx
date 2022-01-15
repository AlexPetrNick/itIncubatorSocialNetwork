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
    store: stateType
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
                        <Route path="/" element={<Profile
                            state={props.store}
                            dispatch={dispatch}
                            />} />
                        <Route path={'/dialogs'} element={<Dialogs
                            state={props.store.dialogsPage}
                            dispatch={dispatch}
                        />}/>
                        <Route path={'/profile'} element={<Profile
                            state={props.store}
                            dispatch={dispatch}
                        />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
