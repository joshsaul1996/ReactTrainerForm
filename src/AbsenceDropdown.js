import React, { Component } from 'react';
import './App.css';

class AbsenceDropdown extends Component{
    constructor(){
        super();
        this.state = {
            absenceValue : ["Sickness", "Medical Appointment", "Compassionate Leave", "Holiday", "Dog ate my car keys"],
            tValue:""
        }

        this.reasonHandleChange = (event) => {
            this.setState({ tValue: event.target.value });
            console.log(this.state.tValue);
        };

    }


    render(){
        return(
            <div class = "Absence-Form">
                <h1>Absence Form</h1>
   
        
                <div>
                <div class = "absenceDropdown">Reason for Absence:</div>
                    <select
                       value={this.state.absenceValue}
                       onChange={this.reasonHandleChange}>
                    <option value ="" disabled>{this.props.placeHolder}</option>
                    {this.state.absenceValue.map(absenceValue => {
                        return(
                            <option
                                value={this.props.absenceValue}
                                label={absenceValue}>{absenceValue}
                            </option>
                        );
                    })}
                    </select>
                </div>

            </div>
        )
            }

        }
export default AbsenceDropdown;
    

