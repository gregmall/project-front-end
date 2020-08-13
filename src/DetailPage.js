import React, { Component } from 'react'
import { getBeer } from './beer-api'

export default class DetailPage extends Component {
    state = {
        beer:{}
    }
    

    componentDidMount = async () => {
        const data = await getBeer(this.props.match.params.id)

        this.setState({
            beer: data.body
        })
    }


    render() {
        return (
            <div>
                <ul>Here is your beer:</ul>
                    <li>{this.state.name}</li>
                    <li>{this.state.category}</li>
                    <li>{this.state.price}</li>
            </div>
        )
    }
}
