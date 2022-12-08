import {createSlice} from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        setMessage(state,action) {
            return action.payload
        },
        reset(state) {
            return ""
        }
    }
})

export const {setMessage, reset} = notificationSlice.actions

export const setNotification = (text, time) => {
    return async dispatch => {
        dispatch(setMessage(text))
        setTimeout(() => dispatch(reset()),time)
    }
}

export default notificationSlice.reducer