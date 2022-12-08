import { useDispatch } from "react-redux"
import anecdoteService from "../services/anecdotes"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { setMessage, reset } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ""
        console.log("create", content)
        anecdoteService.createAnecdote(content)
        .then(response => {
        dispatch(newAnecdote(response))
        dispatch(setMessage(`${response.content} is created!`))
        setTimeout(() => dispatch(reset()),5000)
        })
        .catch(err => console.log(err))
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