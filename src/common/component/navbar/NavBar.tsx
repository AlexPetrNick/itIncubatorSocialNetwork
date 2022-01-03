import React, {FC} from "react";
import "../../../style.css"
import {NavLink} from "react-router-dom";


export const NavBar: FC = () => {
    return (
        <div className={"nav__menu"}>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <a href="">Main content</a>
            </div>
            <div>
                <a href="">Other point</a>
            </div>

            <div className={"setting"}>
                <a href="">Setting</a>
            </div>
        </div>
    )
}