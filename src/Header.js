import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                 
                 <img className="beergif" src="/beerslide.gif" alt="beer" />
                 <h1>Beer</h1>
                 <nav>
                     <div>
                 <Link to='/create'>Create Beer</Link>
                 </div>
                 <div>
                    <Link to='/'>Beer List</Link>
                </div>
                </nav>
            </header>
        )
    }
}
