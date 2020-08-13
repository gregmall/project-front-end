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
    handleDomesticChange(event) {
        const target = event.target;
        const value = target.name === 'Domestic' ? target.checked : target.value;
        const name = target.name;

        
        this.setState({[name]: value});
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
                <h2>ENTER A BEER!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Image URL:
                        <input onChange={this.handleImageChange} value={this.state.image} />
                    </label>
                    <label>
                        Enter Beer Name:
                        <input onChange={this.handleNameChange} value={this.state.name} />
                    </label>
                    <label>
                        Domestic? 
                        <input name="isDomestic" type = "checkbox" onChange={this.handleDomesticChange} value={this.state.domestic} />
                    </label>
                    <label>
                        Category:
                        <select onChange={this.handleCategory} value={this.state.category}>
                            <option value='pilsner'>Pilsner</option>
                            <option value='micro brew'>Micro Brew</option>
                            <option value='lager'>Lager</option>
                            <option value='other'>Other</option>
                        </select>
                    </label>
                    <label>
                        Price:
                        <input onChange={this.handPriceChange} type="number" value={this.state.price} />
                    </label>





                </form>
               
            </div>
        )
    }
}
