import React, { Component } from 'react'
import { getBeers } from './beer-api.js';
import { Link } from 'react-router-dom';
export default class ListBeer extends Component {
    state = {
        beers: []
    }

    componentDidMount = async () => {
        const data = await getBeers()
         this.setState({
            beers: data.body
        })
    }

    render() {
        console.log(this.state.beers)
        return (
      <div className="beers">
              
        {
          this.state.beers.map((beer) => {
            return <Link className="display" to={`/detail/${beer.id}`} key ={`${beer.id}-${beer.name}`}>
                <p><img src={beer.image} alt={beer.image} /> </p>
                <p> Name :  {beer.name}</p>  
                <p> Domestic: {beer.domestic ? 'YES' : 'NO'}</p> 
                <p> Price ${beer.price}</p>
                <p> Type: {beer.category}</p>
                
            </Link>
          })
        }
        
      </div>
        )
    }
}
