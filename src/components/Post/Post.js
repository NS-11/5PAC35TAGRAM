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
        // const media = { post.url.includes("youtube") ? <img className='Post-image' src={post.url} alt="pic"/> : <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"/>}

        return (
            <div className="Post">
                <img className='Post-image' src={post.url} alt="pic"/>
                <Info post={post} />
            </div>
        )
    }
}

export default Post