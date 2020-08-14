import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                 
                 <img src="/beerslide.gif" alt="beer" />
                 <h2>BEER</h2>
                 <nav>
                 <Link to='/create'>Create Beer</Link>
                    <Link to='/'>Beer List</Link>
                </nav>
                    </header>
        )
    }
}
