import React, {FC} from 'react';
import './App.css';
import './style.css'
import {Header} from "./common/component/header/Header";
import {NavBar} from "./common/component/navbar/NavBar";
import {Profile} from "./common/component/profile/Profile";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {actionType, stateType} from "./common/types/Types";
import DialogsContainer from "./common/component/dialogs/DialogsContainer";
import {Users} from "./common/component/users/Users";

type AppData = {
    store: stateType
    dispatch: (action:actionType) => void
}


export const App: FC = () => {


    return (
        <Router>
            <div className="App">
                <Header/>
                <div className={"wrapper__content"}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Profile
                            />} />
                        <Route path={'/dialogs'} element={<DialogsContainer
                        />}/>
                        <Route path={'/profile'} element={<Profile
                        />}/>
                        <Route path={'/users'} element={<Users />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
