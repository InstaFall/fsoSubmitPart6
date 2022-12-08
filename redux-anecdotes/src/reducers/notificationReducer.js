import {createSlice} from "@reduxjs/toolkit"

let timeoutId

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
        if(timeoutId) {clearTimeout(timeoutId)}
        dispatch(setMessage(text))
        timeoutId = setTimeout(() => dispatch(reset()),time)
    }
}

export default notificationSlice.reducer