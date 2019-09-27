import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
class Navigation extends Component {
    render() {
        return (<Router>
            <div>
                <div className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active" >Icon</NavLink>
                        </li>
                        <li className="navs">
                            <NavLink to="/home" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="navs">
                            <NavLink to="/services" activeClassName="active">Services</NavLink>
                        </li>
                        <li className="navs">
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                        <li className="navs">
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                    </ul>
                </div>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
            </div>
        </Router>)
    }
}
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <p>Home</p>
            <button onClick={() => this.props.history.goBack()} >Back</button>
            <button onClick={() => this.props.history.goForward()} >Forward</button>
        </div>)
    }
}
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <p>About</p>
            <button onClick={() => this.props.history.goBack()} >Back</button>
            <button onClick={() => this.props.history.goForward()} >Forward</button>
            <button onClick={() => this.props.history.push("/")}>Go to HomePage</button>
        </div>)
    }
}
class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <p>Contact</p>
            <button onClick={() => this.props.history.goBack()} >Back</button>
            <button onClick={() => this.props.history.goForward()} >Forward</button>
            <button onClick={() => this.props.history.push("/")}>Go to HomePage</button>
        </div>)
    }
}
class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <p>Services</p>
            <button onClick={() => this.props.history.goBack()} >Back</button>
            <button onClick={() => this.props.history.goForward()} >Forward</button>
            <button onClick={() => this.props.history.push("/")}>Go to HomePage</button>
        </div>)
    }
}
export default Navigation;