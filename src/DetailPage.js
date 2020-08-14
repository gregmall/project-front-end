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
            <div className="detail">
                <ul>
                    <li><img src={this.state.beer.image} alt={this.state.beer.image} /></li>
                    <li>NAME: {this.state.beer.name}</li>
                    <li>TYPE: {this.state.beer.category}</li>
                    <li>DOMESTIC: {this.state.beer.domestic ? 'YES' : 'NO'}</li>
                    <li>PRICE: ${this.state.beer.price}</li>
                </ul>
            </div>
        )
    }
}
