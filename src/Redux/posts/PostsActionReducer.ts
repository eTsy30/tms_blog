import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    like?: boolean,
    dislike: boolean,
    favorit: boolean

}
interface IPostsState {
    content: Array<Post> | null
}
const initialState: IPostsState = {
    content: null,

}

const postReducer = createSlice({
    name: 'postReducer',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<Array<Post>>) => {

            state.content = action.payload
        },
        likePost: (state, action: PayloadAction<number>) => {

            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, like: !post.like } : post)
            }
        },
        dislikePost: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, dislike: !post.dislike } : post)
            }
        },
        favoritPost: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, favorit: !post.favorit } : post)
            }
        },
    },
})
export default postReducer.reducer
export const { fetchPosts, likePost, dislikePost, favoritPost } = postReducer.actions
