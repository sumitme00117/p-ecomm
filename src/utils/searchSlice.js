import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        queryStr : ""
    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)
        },
        addQueryStr: (state, action) => {
            state.queryStr = action.payload
        }
        }
    }
)


export const {cacheResults, addQueryStr} = searchSlice.actions

export default searchSlice.reducer