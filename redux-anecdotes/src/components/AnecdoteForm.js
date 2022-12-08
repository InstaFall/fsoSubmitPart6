import { connect, useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()

    const createAnecdoteHandler = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ""
        console.log("create", content)
        props.createAnecdote(content)
        props.setNotification(`${content} is created!`,5000)
        }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={createAnecdoteHandler}>
                <div><input name='anecdote' type="text" /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAnecdote: (anecdote) => {
            dispatch(createAnecdote(anecdote))
        },
        setNotification: (text,time) => {
            dispatch(setNotification(text,time))
        }
    }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)