import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setMessage, reset } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdoteHandler = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ""
        console.log("create", content)
        dispatch(createAnecdote(content))
        dispatch(setMessage(`${content} is created!`))
        setTimeout(() => dispatch(reset()),5000)
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

export default AnecdoteForm