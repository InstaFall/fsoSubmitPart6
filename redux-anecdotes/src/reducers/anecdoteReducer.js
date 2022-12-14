import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

/* const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
] */

/* const getId = () => (100000 * Math.random()).toFixed(0) */

/* const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
} */

/* const sortByVotes = (anecdoteArray) => { //immutable solution
  return [...anecdoteArray].sort((a, b) => b.votes - a.votes)
} */

const sortByVotes = (anecdoteArray) => { //mutable 
  return anecdoteArray.sort((a, b) => b.votes - a.votes)
}

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    newAnecdote(state, action) {
        state.push(action.payload)
    },
    vote(state,action) {
      return sortByVotes(state.map((el) => el.id === action.payload ? {...el, votes: el.votes + 1} : el))
    },
    setAnecdotes(state,action) {
      return action.payload
    }
  }
})

export const {newAnecdote, vote, setAnecdotes} = anecdoteSlice.actions

export const intializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createAnecdote(content)
    dispatch(newAnecdote(anecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    dispatch(vote(anecdote.id))
    await anecdoteService.vote(anecdote)
  }
}

export default anecdoteSlice.reducer