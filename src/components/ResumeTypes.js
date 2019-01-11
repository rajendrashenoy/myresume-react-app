import React, { Component } from 'react';


class ResumeTypes extends Component {

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

    return this.props.resumetypes.map((resumetype, selectedtype) => (
    		//<input type="submit" id={resumetype.id} value={ resumetype.type} onClick={this.handleChange}/>   
        //<input type="submit" id={resumetype.id} value={ resumetype.type} onClick={this.handleChange}/>
        <input type="button" style={{width: '25%', border: "none"}} id={resumetype.id} key={resumetype.id} value={ resumetype.type} onClick={this.props.selectedtype.bind(this, resumetype.id)}/>		
    ));

  }
}

export default ResumeTypes;