import {createSlice} from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: null,
    reducers: {
        setMessage(state,action) {
            return action.payload
        },
        reset(state) {
            return null
        }
    }
})

export default notificationSlice.reducer