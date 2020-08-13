import React from 'react';
import './App.css';
import { getBeer } from './beer-api.js';

 class App extends React.Component {

  state = {
    beers: []

  }

  componentDidMount = async () => {
    const data = await getBeer() 

    this.setState({
      beers: data.body
    })
  }


  render() {
    return (
      <div>
        <h2>BEERS:</h2>
        {
          this.state.beers.map((beer) => {
            return <div>{beer.name} : {beer.domestic} {beer.category} : { beer.price}
            </div>
          })
        }
        
      </div>
    )
  }
}



 export default App;
