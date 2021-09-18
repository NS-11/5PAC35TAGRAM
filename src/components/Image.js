import React from "react"

class Image extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            data: {},
            liked: false
        }
        this.likeButtonClicked = this.likeButtonClicked.bind(this)
    }

    componentDidMount() {
        const apiKey = "eelbSUjL8bvULwLgmemgCtWitsHoyrHH4gh6TOrm"

        this.setState({loading: true})
        fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    data: data
                })

            })
    }

    likeButtonClicked() {
        this.setState(prevState => {    
            return {
                liked: !prevState.liked
            }
            
        })
        
    }

    render() {
        const data = this.state.data
        const text = this.state.loading ? "loading..." : this.state.data.explanation
        const imageLiked = this.state.liked ? "Unlike" : "Like"
        return (
            <div>
                <img src={data.url} alt="image"/>
                <p>{data.title} - {data.date}</p>
                <p>{text}</p>
                <button onClick={this.likeButtonClicked} >{imageLiked}</button>
            </div>
        )
    }
}

export default Image