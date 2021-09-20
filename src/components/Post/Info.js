import React from "react"
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa';
import './post.css'

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDescription: false,
            liked: false
        }
        this.likeButtonClicked = this.likeButtonClicked.bind(this)
    }

    likeButtonClicked() {
        this.setState(prevState => {    
            return {
                liked: !prevState.liked
            }
        })
    }

    render(props) {
        const post = this.props.post
        const imageLiked = this.state.liked ? <FaHeart size="30px" color="hotpink" onClick={this.likeButtonClicked}/> : <FiHeart size="30px" color="hotpink" onClick={this.likeButtonClicked}/>
        return (
            <div className="Post-info">
                <div className="Post-title">
                        <h3>{post.title}</h3>
                        <p>{post.date}</p>                    
                </div>
                <p>
                    {post.explanation}
                </p>
                <div>
                {imageLiked}
                </div>
            </div>
        )
    }
}

export default Info