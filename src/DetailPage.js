import React, { Component } from 'react'
import { getBeer, getCategory, updateBeer, deleteBeer } from './beer-api'

export default class DetailPage extends Component {
    state = {
        beer:{},
        image: '/beer.gif',
        name: '',
        category_id: 1,
        domestic: true,
        price: 3,
        category: [],
    }
    

    componentDidMount = async () => {
        const data = await getBeer(this.props.match.params.id)
        const categoryData = await getCategory();

        const matchingCategory = categoryData.body.find(cat=> cat.name === data.body.category);

        this.setState({
            category: categoryData.body,
            beer: data.body,
            image: data.body.image,
            name: data.body.name,
            domestic: data.body.domestic,
            price: data.body.price,
            cat: matchingCategory,
            category_id: matchingCategory.id,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        await updateBeer(
            this.props.match.params.id,
            {
                image: this.state.image,
                name: this.state.name,
                domestic: this.state.domestic,
                price: this.state.price,
                category_id: this.state.category_id,
                
            }
            
        );
        const updatedBeer= await getBeer(this.props.match.params.id)

        this.setState({
            image: '',
            name: '',
            domestic: true,
            price: 3,
            category_id: 1,
            beer: updatedBeer.body,
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
    handleDelete = async () => {
        await deleteBeer(this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        console.log(this.state.category)
        return (
            <div className="detail">
                <div>
                <ul>
                    <li><img className="image"src={this.state.beer.image} alt={this.state.beer.image} /></li>
                    <li>NAME: {this.state.beer.name}</li>
                    <li>TYPE: {this.state.beer.category}</li>
                    <li>PRICE: ${this.state.beer.price}</li>
                    <li>DOMESTIC: {this.state.beer.domestic ? 'YES' : 'NO'}</li>
                    <li><button className="deletebutton" onClick={this.handleDelete}>DELETE BEER</button></li>
                    
                </ul>
                </div>
                <div className="create">
                <h3>Update this beer?</h3>
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
                        <select onChange={this.handleCategory} >
                            {
                                this.state.category.map((category) => <option value={category.id}>{category.name}</option>)
                            }
                        </select>
                    </label></div>
                  

                    <div><button>UPDATE THAT BEER</button></div>



                </form>
                        
                      </div>      
            </div>
        )
    }
}
