import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';
import ListBeer from './ListBeer.js';
import DetailPage from './DetailPage.js';
import CreateBeer from './CreateBeer.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <main>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListBeer {...routerProps} />} 
                        />
                   <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreateBeer {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    
                    </Switch>
                    </main>
                </Router>
            </div>
        )
    }
}





