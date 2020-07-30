import React from 'react'

const EditPost = (props) => {
    const title = React.createRef()
    const img = React.createRef()
    const text = React.createRef()

    let editPost = () => {
        props.EditPostThunk(title.current.value, text.current.value, img.current.value, props.match.params.postId)
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" ref={title} placeholder="title" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append"></div>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" ref={img} placeholder="img url" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append"></div>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <textarea className="form-control" aria-label="With textarea" ref={text} placeholder="text"></textarea>
            </div>
            <button className='btn btn-primary mt-4' onClick={editPost}>edit post</button>
        </div>
    )
}

export default EditPost