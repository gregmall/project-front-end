import React, { Component } from 'react'
import { createBeer } from './beer-api';
import './App.css';
export default class CreateBeer extends Component {
    state = {
        image: '',
        name: '',
        domestic: true,
        category: '',
        price: 0,

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createBeer({
            image: this.state.image,
            name: this.state.name,
            domestic: this.state.domestic,
            category: this.state.category,
            price: this.state.price,

        })
        
    }
    handleImageChange = e => {
        this.setState({image: e.target.value});
    }
    handleNameChange = e => {
        this.setState({name: e.target.value});
    }
    handleDomesticChange = e =>  {
        this.setState({domestic: e.target.checked});
    }
    handleCategory = e => {
        this.setState({category: e.target.value});
    }
    handPriceChange = e => {
        this.setState({price: e.target.value});
    }
    
    
    
    render() {
        return (
            <div className="create">
                <h3>ENTER A BEER!</h3>
                <form onSubmit={this.handleSubmit}>
                <div><label>
                        Enter Beer Name:
                        <input onChange={this.handleNameChange} value={this.state.name} />
                    </label></div>
                    <div><label>
                       Enter Image URL:
                        <input onChange={this.handleImageChange} value={this.state.image} />
                    </label></div>
                 
                    <div><label>
                        Domestic beer? (check box for 'yes')
                        <input name="isDomestic" type = "checkbox" onChange={this.handleDomesticChange} value={this.state.domestic} />
                    </label></div>
                    <div><label>
                        Category:
                        <select onChange={this.handleCategory} value={this.state.category}>
                            <option value='pilsner'>Pilsner</option>
                            <option value='micro brew'>Micro Brew</option>
                            <option value='lager'>Lager</option>
                            <option value='other'>Other</option>
                        </select>
                    </label></div>
                    <div><label>
                        Price:
                        <input onChange={this.handPriceChange} type="number" value={this.state.price} />
                    </label></div>

                    <button>MAKE BEER</button>



                </form>
               
            </div>
        )
    }
}
