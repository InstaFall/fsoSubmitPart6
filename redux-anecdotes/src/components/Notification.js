import {connect, useSelector} from "react-redux"


const Notification = (props) => {
  //const notification = useSelector(state => state.notification)
  const notification = props.notification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 3
  }
  return ( notification ? 
    <div style={style}>
      {notification}
    </div> 
    :
    null
    )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)