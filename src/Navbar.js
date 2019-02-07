import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import App from './App.js';

class Navbar extends Component{
    render(){
        return(
            <Router>
                <div class = "Navbar">
                    <ul>
                        <li><Link to ="/timetable">Timetable</Link></li>
                        <li><Link to ="/requestadjustment">Request Timetable Adjustment</Link></li>
                        <li><Link to ="/personaldetails">Personal Details</Link></li>
                    </ul>
                    <Route exact path="/timetable" component={App}/>
                    <Route path="/requestadjustment" component={App}/>
                    <Route path="/personaldetails" component={App}/>
                </div>
            </Router>
        )
    }
}
export default Navbar;