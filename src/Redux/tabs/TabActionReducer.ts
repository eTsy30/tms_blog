import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
const tabReducer = createSlice({
    name: 'tabReducer',
    initialState: {
        indexTab: 0,

    },
    reducers: {
        switchTabs(state, action: any) {
            state.indexTab = Number(action.payload)
        }
    }
})
export default tabReducer.reducer
export const { switchTabs } = tabReducer.actions