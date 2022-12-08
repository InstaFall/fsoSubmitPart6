import { connect, useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = (props) => {
    //const dispatch = useDispatch()

    const onChange = (e) => {
        const filter = e.target.value 
        props.setFilter(filter)
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

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => {
            dispatch(setFilter(filter))
        }
    }
}

export default connect(null, mapDispatchToProps)(Filter)