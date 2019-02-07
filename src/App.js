import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './header';
import AbsenceForm from './AbsenceForm';
import AbsenceDropdown from './AbsenceDropdown';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      dropdownOption: "Select an Option...",
      formField1: "Further Details",
      formField2: "Absence Code",
      formField3: "Manager",
      formField4: "Date From (DD/MM/YYYY)",
      formField5: "Date Until (DD/MM/YYYY)",
      formResponse: " "
    }
  

  this.updateState = (result) => {
    if (result === "true"){
      this.setState({
        formResponse: "Absence Form has been submitted"
      })
    }
    else{
      this.setState({
        formResponse: "Please complete all form fields"
      })
    }
  }


  }

  render(){
    return(
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <AbsenceDropdown>
         placeHolder={this.state.dropdownOption}
        </AbsenceDropdown>
        <AbsenceForm
          field1Prop={this.state.formField1}
          field2Prop={this.state.formField2}
          field3Prop={this.state.formField3}
          field4Prop={this.state.formField4}
          field5Prop={this.state.formField5}
          responseProp={this.state.formResponse}
          updateResponse={this.updateState}
        ></AbsenceForm>
    </div>
    );
  }
}

export default App;
