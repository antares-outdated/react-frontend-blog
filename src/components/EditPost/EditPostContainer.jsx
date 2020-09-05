import {editPostThunk} from './../../redux/reducer'
import {connect} from 'react-redux'
import EditPost from './EditPost'

let mapDispatchToProps = (dispatch) => ({
        EditPostThunk: (title, text, img, id) => {
            dispatch(editPostThunk(title, text, img, id))
        }
})

let mapStateToProps = (state) => ({
    // state: state,
    loader: state.loader
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)