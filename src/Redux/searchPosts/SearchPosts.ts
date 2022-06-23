import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
interface ISearchState {
    content: Array<Post> | null,
    isLoading: boolean
}
const initialState: ISearchState = {
    content: null,
    isLoading: false

}
export const searchPost: any = createAsyncThunk(
    'search',
    async (value) => {
        try {
            const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=73&offset=0&search=${value}`)
            const responseFormat = await response.json()
            return responseFormat.results
        } catch (error) {
            return console.log(error);
        }

    }

)


const searchReducer = createSlice({
    name: 'postReducer',
    initialState,
    extraReducers: {
        [searchPost.pending]: (state: any) => {
            state.isLoading = true
        },
        [searchPost.fulfilled]: (state, action) => {
            state.content = action.payload
            state.isLoading = false
        },
        [searchPost.rejected]: (state) => {
            state.isLoading = false
        },

    },
    reducers: {}
})
export default searchReducer.reducer


