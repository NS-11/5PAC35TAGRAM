import React from 'react'
import Info from './Info'
import './post.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        const post = this.props.post
        return (
            <div className="Image">
                <img className='Image-image' src={post.url} alt="pic"/>
                <Info data={post} />
            </div>
        )
    }
}

export default Post