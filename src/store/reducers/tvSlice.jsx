import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        addTv: (state, action) => {
            state.info = action.payload
        },
        removeTv: (state, action) => {
            state.info = null
        }
    }
})

export const {addTv, removeTv} = tvSlice.actions
export default tvSlice.reducer