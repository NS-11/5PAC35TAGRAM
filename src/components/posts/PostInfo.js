import React from "react"
import { Collapse } from "@material-ui/core"
import { FiHeart } from "react-icons/fi"
import { IoIosArrowUp } from "react-icons/io/"
import "../styles/Post.css"

// INFO OF A POST 
class PostInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLiked: false,
            showDescription: false
        }
        this.likeButtonClicked = this.likeButtonClicked.bind(this)
        this.arrowClicked = this.arrowClicked.bind(this)
    }

    likeButtonClicked() {
        this.setState(prevState => {    
            return {
                imageLiked: !prevState.imageLiked
            }
        })
    }

    arrowClicked() {
        this.setState(prevState => {
            return {
                showDescription: !prevState.showDescription
            }
        })
    }

    render(props) {
        const post = this.props.post
        const { imageLiked, showDescription } = this.state
        const heart = imageLiked ? "Post-heart-like" : ""
        const rotated = showDescription ? "" : "rotated"
        
        return (
            <div className="Post-info">
                <div className="Post-header">
                        <h3 className="Post-title">{post.title}</h3>
                        <p>{post.date}</p>                    
                </div>

                <br/>

                <Collapse in={showDescription}>
                    <p>{post.explanation}</p>
                </Collapse>

                <div className="Post-arrow">
                    <IoIosArrowUp id={rotated} size="20px" onClick={this.arrowClicked}/>
                </div>

                <FiHeart id={heart} className="Post-heart" onClick={this.likeButtonClicked}/>
            </div>
        )
    }
}

export default PostInfo