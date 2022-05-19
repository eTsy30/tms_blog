import { createSlice, } from '@reduxjs/toolkit';
type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    like?: boolean
}

interface IPostState {
    contetn: Array<Post> | null
}
const initialState: IPostState = {
    contetn: null
}

export const postSlise = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetcPosts: (state, action) => {
            state.contetn = action.payload
        },
        likePost: (state, action) => {
            if (state.contetn) {
                state.contetn = state.contetn.map(post => post.id === action.payload ? { ...post, like: true } : post)
            }
        },
        dislikePost: (state, action) => {
            if (state.contetn) {
                state.contetn = state.contetn.map(post => post.id === action.payload ? { ...post, like: false } : post)
            }
        }
    },
})

export const { fetcPosts, likePost, dislikePost } = postSlise.actions
export default postSlise.reducer