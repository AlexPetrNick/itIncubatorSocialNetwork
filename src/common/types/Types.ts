export type PostDataType = {
    id: string
    content: string
    cntLike: number
}
export type DataTypes = {
    id: string
    name: string
}

export type dialogPageType = {
    dialogsData: Array<DataTypes>
    messageData: {
        [key: string]: Array<string>
    },
    newMessageText: string
}

export type profileDataType = {
    postData: Array<PostDataType>
    textPostProfileText: string
}

export type locationUserDataType = {
    city:string
    country:string
}

export type usersType = {
    id:number
    followed:boolean
    fullName: string
    status:string
    location:locationUserDataType
}

export type userDataType = {
    users: usersType[]
}

export type stateType = {
    profileData: profileDataType
    dialogsPage: dialogPageType
    usersPage: userDataType
}

export type rerenderEntireTreeType = (state:stateType, addPost:() => void) => void


export type actionType = {
    type: string
    title?: string
}