import React from "react"
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io/'
import Bounce from 'react-reveal/Bounce'
import './post.css'

class Info extends React.Component {
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
        
        return (
            <div className="Post-info">
                <div className="Post-header">
                        <h3 className="Post-title">{post.title}</h3>
                        <p>{post.date}</p>                    
                </div>
                <br/>
                {showDescription && <p>{post.explanation}</p>}
                <div className="Post-arrow">
                    {!showDescription && <IoIosArrowDown size="20px" onClick={this.arrowClicked}/>}
                    {showDescription && <IoIosArrowUp size="20px" onClick={this.arrowClicked}/>}
                </div>
                {!imageLiked && <FiHeart id="Post-heart-like" className="Post-heart" onClick={this.likeButtonClicked}/>}
                <Bounce when={imageLiked}>
                    {imageLiked && <FaHeart className="Post-heart" onClick={this.likeButtonClicked}/>}
                </Bounce>
            </div>
        )
    }
}

export default Info