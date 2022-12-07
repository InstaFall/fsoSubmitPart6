import {createSlice} from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: "Initial Message",
    reducers: {
        setMessage(state,action) {
            state = action.payload
        }
    }
})

export default notificationSlice.reducer