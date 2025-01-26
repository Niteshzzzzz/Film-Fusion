import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.info = action.payload
        },
        removePerson: (state, action) => {
            state.info = null
        }
    }
})

export const {addPerson, removePerson} = personSlice.actions
export default personSlice.reducer