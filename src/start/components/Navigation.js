import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Repo from './Repo'

export default function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/page1" activeClassName="active">Repo</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Repo}/>
            </Switch>
        </div>
    )
}
