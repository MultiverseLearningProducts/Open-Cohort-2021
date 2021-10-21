import React from 'react'

//import your components
import Songs from './Songs'
import Users from './Users'
import User from './User'
import NewUser from './NewUser'

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
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/users/:id" component={User} />
                    <Route exact path="/newUser" component={NewUser} />
                </Switch>
        </Router>
    )
}

export default Routes