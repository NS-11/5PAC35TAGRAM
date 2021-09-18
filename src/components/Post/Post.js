import React from 'react'
import Info from './Info'
import './post.css'

class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            data: {}
        }
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

    render() {
        const data = this.state.data
        return (
            <div className="Image">
                <img className='Image-image' src={data.url} alt="pic"/>
                <Info data={data} />
            </div>
        )
    }
}

export default Post