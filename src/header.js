import React, {Component} from 'react';
import './App.css';

class Header extends Component{
    render(){
        return(
        <div class = "header">
            <div>
            <img id ="companyLogo" src = "/img/CompanyLogo.png" alt= "Trainers Logo" />
            </div>
            <div>
                <a href="">Dashboard</a> 
            </div>
            <div>
                <button type="button">Login</button>
            </div>
            <div>
            <input type="text" id="search" placeholder="Search"/>
            </div>

        </div>
        )
        
        
        
        
        
        
        
    }
}

export default Header;