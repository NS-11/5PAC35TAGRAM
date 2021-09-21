import React from "react"
import { PulseLoader } from "react-spinners"
import Post from "./Post"
import "../styles/Post.css"

// ALL POSTS
class Posts extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const apiKey = "eelbSUjL8bvULwLgmemgCtWitsHoyrHH4gh6TOrm"

        this.setState({loading: true})
        fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=32")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    data: data
                })
            })
        
    }

    render() {
        const loading = this.state.loading
        const data = this.state.data.map((post, i) => <Post key={i} post={post}/>)
        
        return (
            <div>
                {loading && <PulseLoader/>}
                {!loading && data}
            </div>
        )
    }
}

export default Posts