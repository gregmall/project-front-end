import React, { Component } from 'react'
import { createBeer, getCategory } from './beer-api';
import './App.css';
export default class CreateBeer extends Component {
    state = {
        image: '',
        name: '',
        domestic: true,
        category_id: 1,
        price: 0,
        category: [],

    }

    componentDidMount = async () => {
        const categoryData = await getCategory()
        console.log(categoryData.body);
        this.setState({
            category: categoryData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createBeer({
            image: this.state.image,
            name: this.state.name,
            domestic: this.state.domestic,
            category_id: this.state.category_id,
            price: this.state.price,

        });
        this.setState({
            image:'/beer.gif',
            name: '',
            domestic: true,
            price: 2,
            category_id: 1
        });
        this.props.history.push('/');
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
        this.setState({category_id: e.target.value});
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
                        Price:
                        <input onChange={this.handPriceChange} type="number" value={this.state.price} />
                    </label></div>
                    <div><label>
                        Category:
                        <select onChange={this.handleCategory} value={this.state.category}>
                        {
                                this.state.category.map((category) => <option value={category.id}>{category.name}</option>)
                            }
                        </select>
                    </label></div>
                  

                    <button>MAKE BEER</button>



                </form>
               
            </div>
        )
    }
}
