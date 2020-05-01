import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import Repo from '../Repo/Repo'

export default function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/page1" activeClassName="active">page1</NavLink>
                </li>
                <li>
                    <NavLink to="/page2" activeClassName="active">Page2</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Repo}/>
                <Route path="/page2" component={Home}/>
            </Switch>

            
        </div>
    )
}
