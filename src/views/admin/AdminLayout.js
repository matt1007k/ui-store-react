import React, { Component } from 'react'

import { Switch, Link, Route, Redirect } from 'react-router-dom'

class AdminLayout extends Component {

    render() {
        
        console.log('Backend');
        return (
            <div>
            <h2>Backend</h2>
            <p><Link to="/admin">Root</Link></p>
            <p><Link to="/admin/user">User</Link></p>
            <p><Link to="/">Frontend</Link></p>
            <p><Link to="/admin/the-route-is-swiggity-swoute">Swiggity swooty</Link></p>
            <Switch>
                <Route exact path='/admin' component={DashboardPage}/>
                <Route path='/admin/user' component={UsersPage}/>
                <Redirect to={{
                    state: { error: true }
                }} />
            </Switch>
            <footer>Admin Bottom</footer>
            </div>
        );
    }
}

export default AdminLayout;

const DashboardPage = props => (
    <h2>Pages Dashboard </h2>
)

const UsersPage = props => (
    <h2>Pages Users </h2>
)
