import React, { Component } from 'react';


class DevOpsResume extends Component {

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
    		//<input type="submit" id={resumetype.id} value={ resumetype.type} onClick={this.handleChange}/>   
        //<input type="submit" id={resumetype.id} value={ resumetype.type} onClick={this.handleChange}/>
        <p style={{color: 'red'}}>My Dev Ops Resume is under construction....</p> 
    );

  }
}

export default DevOpsResume;