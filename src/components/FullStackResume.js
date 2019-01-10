import React, { Component } from 'react';


class FullStackResume extends Component {

  constructor(props) {
  	super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.state = {selectedtype: ''}
  }	  

  handleChange(event) {
    //this.state = {selectedtype: event.target.value}
    alert(event.target.id);
    this.props.selectedtype.bind(this, event.target.id);
  }	

  render() {

    //const { selectedtype} = this.props.selectedtype;

    return (
        <h2>
        <p className="App-resume-header">Profile</p> 
        <p className="App-resume-profile-section">
          Senior full stack developer with extensive experience in driving complex IT solutions through
          discover, design, and deployment phases leveraging a wide variety of technical skills 
          acquired over 22+ years. Possesses rich people, processes, and programming skills. 
        </p> 
        </h2>
    );

  }
}

export default FullStackResume;