import React from "react"
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
        const data = this.props.data
        const imageLiked = this.state.liked ? "Image-unliked" : "Image-liked"
        return (
            <div className="Image-info">
                <div className="Image-title">
                    <h3>{data.title}</h3>
                    <p>{data.date}</p>
                </div>
                <p>
                    {data.explanation}
                </p>
                <button className={imageLiked} onClick={this.likeButtonClicked}>Like</button>
            </div>
        )
    }
}

export default Info