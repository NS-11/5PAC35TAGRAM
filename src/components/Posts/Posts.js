import React from 'react'
import Post from '../Post/Post'
import { PulseLoader } from 'react-spinners'
import './posts.css'

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
        fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=30")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    data: data
                })
                console.log(data)
            })
        
    }

    render() {
        const loading = this.state.loading ? <PulseLoader/> : ""
        const data = this.state.data.map((post, i) => <Post key={i} post={post}/>)
        return (
            <div>
                {loading}
                {data}
            </div>
        )
    }
}

export default Posts