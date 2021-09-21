import React from "react"
import Info from "./PostInfo"
import "../styles/Post.css"

// SINGLE POST
class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        const post = this.props.post

        // Either shows an image or a video depending on the media type
        const media = post.media_type === "video" ? 
            <iframe title="video" width="400px" src={post.url}/> : 
            <img className="Post-image" src={post.url} alt={post.url}/>

        return (
            <div className="Post">
                {media}
                <Info post={post} />
            </div>
        )
    }
}

export default Post