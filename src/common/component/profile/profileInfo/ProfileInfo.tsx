import {FC} from "react";

export const ProfileInfo: FC = () => {
    return (
        <>
            <div>
                <img src={"https://static.schools.by/images/header-bg/img-16.jpg"}/>
            </div>
            <div className={"profile__user__info"}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9wd1vdvmXNs9AobWt-l-fJi2o1CQpyJRqQ&usqp=CAU"
                    alt=""/>
                Description
            </div>
        </>
    )
}