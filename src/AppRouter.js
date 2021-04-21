import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App'
import About from './components/pages/About'
import Api from './components/pages/Api'
import Contact from './components/pages/Contact'

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/api">Api</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/api" component={Api} />
                </div>
            </Router>
        )
    }
}

export default AppRouter