import React from "react"
import Info from "./PostInfo"
import "../styles/Post.css"

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        const post = this.props.post
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