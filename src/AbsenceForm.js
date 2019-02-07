import React, { Component } from 'react';
import './App.css';

class AbsenceForm extends Component{
    constructor(){
        super();
        this.state = {
            fDValue: "",
            aCValue: "",
            manValue: "",
            dateFromValue: "",
            dateUntilValue: "",
            absenceReport: [],

        }

        this.fDHandleChange = (event) =>{
            this.setState({
                fDValue : event.target.value
            })
        }

        this.aCHandleChange = (event) =>{
            this.setState({
                aCValue: event.target.value
            })
        }

        this.manHandleChange = (event) =>{
            this.setState({
                manValue: event.target.value
            })
        }

        this.dateFromHandleChange = (event) =>{
            this.setState({
                dateFromValue: event.target.value

            })
        }

        this.dateUntilHandleChange = (event) =>{
            this.setState({
                dateUntilValue: event.target.value

            })
        }

        this.FormComplete = () =>{
            if(this.setState.fDValue =="" || this.state.aCValue == "" || this.setState.manValue == "" || this.setState.dateFromValue == "" || this.setState.dateUntilValue == ""){
                this.props.updateResponse("false");

            }

            else{
                this.props.updateResponse("true");
                let absenceReport =this.state.absenceReport;
                absenceReport.push({
                    id: absenceReport.length,

                    further_details: this.state.fDValue,
                    absence_code: this.state.aCValue,
                    manager: this.state.manValue,
                    date_from: this.state.dateFromValue,
                    date_until: this.state.dateUntilValue
                })
                this.setState({
                    absenceReport
                })
                console.log(AbsenceForm)
            }
        }
    }
    render(){
        return(
            <ul>
                        <li><h2>{this.props.field1Prop}<input type="text" onChange={this.fDHandleChange} value={this.state.fDValue}/></h2></li>
                        <li><h2>{this.props.field2Prop}<input type="text" onChange={this.aCHandleChange} value={this.state.aCValue}/></h2></li>
                        <li><h2>{this.props.field3Prop}<input type="text" onChange={this.manHandleChange} value={this.state.manValue}/></h2></li>
                        <li><h2>{this.props.field4Prop}<input type="text" onChange={this.dateFromHandleChange} value={this.state.dateFromValue}/></h2></li>
                        <li><h2>{this.props.field5Prop}<input type="text" onChange={this.dateUntilHandleChange} value={this.state.dateUntilValue}/></h2></li>
                        <button id = "submitForm" onClick={this.FormComplete}>Submit</button>
                        <p>{this.props.responseProp}</p>
                </ul>

            );
            } 
}

export default AbsenceForm;