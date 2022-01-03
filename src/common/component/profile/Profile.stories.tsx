import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Profile, ProfileType} from "./Profile";
import {action} from "@storybook/addon-actions";
import {state} from "../../redux/state";


export default {
    title: 'Profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}


const callback = action('click add post')
const updateTextProfile = (newText:string) => {
    state.profileData.textPostProfileText = newText
}

const TemplateProfile:Story<ProfileType> = (args) => <Profile {...args}/>

export const ProfileMenu = TemplateProfile.bind({})
ProfileMenu.args = {
    state,
    addPost: callback,
    updateTextProfile
}