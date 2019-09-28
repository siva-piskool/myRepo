import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Para from './Para';
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
           <Link to="About#demo" >jump to About page section4</Link>
           <br/>
           <br/>
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
            <section>
                <h1>Section1</h1>
                <Para/>
            </section>
            <section>
            <h1>Section2</h1>
            <Para/>
            </section>
            <section>
            <h1>Section3</h1>
            <Para/>
            </section>
            <section>
            <h1 id="demo">Section4</h1>
            <Para/>
            </section>
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