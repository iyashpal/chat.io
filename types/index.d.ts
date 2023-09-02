import type {FunctionalComponent} from "vue";


export type ThemeMode = 'light' | 'dark'

export type NavigationType = {
    icon: FunctionalComponent;
    label: string;
    href: string;
    actions?: [{ icon: FunctionalComponent, onClick: () => void }]
    children?: {
        label: string;
        href: string;
    }[]
}


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string;
    website: string;
    twitter_profile: string;
    facebook_profile: string;
    instagram_profile: string;
    pinterest_profile: string;
}

export interface Message {
    id: number;
    user_id: number;
    to_user_id: number;
    message: string;
    created_at: string;
}