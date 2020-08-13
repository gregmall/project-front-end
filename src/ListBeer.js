import React, { Component } from 'react'
import { getBeers } from './beer-api.js';
import { Link } from 'react-router-dom';
export default class ListBeer extends Component {
    state = {
        beers: []
    }

    componentDidMount= async () => {
        const data = await getBeers()
        this.setState({
            beers: data.body
        })
    }

    render() {
        return (
            <div className="beersList">
             
        {
          this.state.beers.map((beer) => {
            return <Link className="display" to={`/detail/${beer.id}`}><img src={beer.image} alt={beer.image} />  Name :  {beer.name} - Domestic: {beer.domestic ? 'YES' : 'NO'} - Type: {beer.category}  - Price ${beer.price}
            </Link>
          })
        }
        
      </div>
        )
    }
}
