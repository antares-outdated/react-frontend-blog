import {addPostThunk} from './../../redux/reducer'
import {connect} from 'react-redux'
import AddPost from './AddPost'

let mapDispatchToProps = (dispatch) => {
    return {
        addPostThunk: (title, img, text) => {
            dispatch(addPostThunk(title,img,text))
        }
    }
}

let mapStateToProps = (state) => {
    return state
}

const AddPostConstainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostConstainer