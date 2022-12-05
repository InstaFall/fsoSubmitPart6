import { useDispatch } from "react-redux"
import {newAnecdote} from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ""
        console.log("create", content)
        dispatch(newAnecdote(content))
      }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <div><input name='anecdote' type="text" /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm