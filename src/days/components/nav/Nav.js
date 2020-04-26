import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from '../home/Home'

export default function Nav() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Home}/>
                <Route path="/page2" component={Home}/>
            </Switch>

            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/page1" activeClassName="active">Page1</NavLink>
                </li>
                <li>
                    <NavLink to="/page2" activeClassName="active">Page2</NavLink>
                </li>
            </ul>
        </div>
    )
}
