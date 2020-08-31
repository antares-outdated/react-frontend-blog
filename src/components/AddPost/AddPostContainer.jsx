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

const AddPostConstainer = connect(null, mapDispatchToProps)(AddPost)

export default AddPostConstainer