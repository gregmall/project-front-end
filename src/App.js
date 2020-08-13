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
      <div className="App">
        <h2>BEERS:</h2>
        {
          this.state.beers.map((beer) => {
            return <div className="display">Name: {beer.name} :Domestic: {beer.domestic ? 'YES' : 'NO'} Type: {beer.category} Price ${beer.price}
            </div>
          })
        }
        
      </div>
    )
  }
}



 export default App;
