import React, { Component } from 'react';


class ResumeTypes extends Component {

  constructor(props) {
  	super(props);
    //this.handleChange = this.handleChange.bind(this);
  }	  

  render() {


  return this.props.resumetypes.map((resumetype, selectedtype) => (
       <input type="button" style={{width: '25%', border: "none"}} id={resumetype.id} key={resumetype.id} value={ resumetype.type} onClick={this.props.selectedtype.bind(this, resumetype.id)}/>		
   
    ));

  }
}

export default ResumeTypes;