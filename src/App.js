import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import Footer from "./components/Footer";
import React from "react";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/services" component={Services}/>
                <Route path="/products" component={Products}/>
                <Route path="/sign-up" component={Signup}/>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
