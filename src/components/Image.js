import React from "react"

class Image extends React.Component {
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
        const text = this.state.loading ? "loading..." : this.state.data.explanation
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Image