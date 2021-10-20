import React from 'react'

//import your components
import Songs from './Songs'
import Users from './Users'

//import react-dom-router dependencies 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


function Routes() {
    return (
        <Router>
                {/* Defining the Links (clickable) */}
                <Link to="/music">Music</Link>
                <Link to="/users">Users</Link>
                {/* Defining the switches, render the matching components */}
                <Switch>
                    <Route path="/music" component={Songs} />
                    <Route path="/users" component={Users} />
                </Switch>
        </Router>
    )
}

export default Routes