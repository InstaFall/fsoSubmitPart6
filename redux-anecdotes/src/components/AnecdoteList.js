import { useDispatch, useSelector } from "react-redux"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = ({content, id}) => {
        console.log('vote', id)
        dispatch({ type: "anecdotes/vote", payload: id })
        dispatch({ type: "notification/setMessage", payload: `You voted for ${content}`})
        setTimeout(() => dispatch({ type: "notification/reset" }),5000)
    }
    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )}
          </>
    )
}

export default AnecdoteList