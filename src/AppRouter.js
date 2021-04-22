import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App'
import About from './components/pages/About'
import Api from './components/pages/Api'
import Contact from './components/pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link href="#"><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link href="#"><Link to="/contact">Contact</Link></Nav.Link>
                                <Nav.Link href="#"><Link to="/api">Api</Link></Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/" exact component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/api" component={Api} />
                </Container>
            </Router>
        )
    }
}

export default AppRouter