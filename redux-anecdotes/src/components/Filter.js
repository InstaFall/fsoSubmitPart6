import { useDispatch } from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()

    const onChange = (e) => {
        const filter = e.target.value 
        dispatch({type: "filter/setFilter", payload: filter})
    }
    const style = {
        marginBottom: 10
    }
    
    return (
        <div style={style}>
        filter <input type="text" name="filter" onChange={onChange}/>
        </div>
    )
}

export default Filter