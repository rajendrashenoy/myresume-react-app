import React, { Component } from 'react';


class ConsultancyResume extends Component {

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

        <p className="App-resume-section">
        A highly motivated IT professional with 22+ years of experience in alayzing complex 
        enterprise business need and delivering the outcomes. Achieves stakeholder expectations 
        and delivers business value constantly, consistently, and cost effectively. Possesses 
        wide array of transferrable set of skills that can be leveraged to realize the 
        desired outcomes within the entire Software Development Life Cycle. Demonstrates 
        excellent organizational, management, and technical skill to consistently meet deadlines. 
        Recognized for excellent communication, presentation, and negotiation skills.
        </p> 

        <p className="App-resume-timeline">June 2012 to Present</p> 
        <p className="App-resume-jobdescription">Senior Applications Consultant, <i> Stefanini Canada Ltd</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Analyses business needs of Client Proejcts with a total annual turnover of over 
            US$ 3.5 Million, and, Acts as single point of contact for all client communications.
            </li>
            <li>Gathers client business requirements, translates them to software 
            functionalities, and hands them over to engineering teams.
            </li>
            <li>Formulates and enhances Stefanini’s Software Quality Assurance process and 
            incorporates the methodologies thereof to Stefanini’s Business and Enterprise 
            Architectures.
            </li>
          </ul>
        </p>

        <p className="App-resume-timeline">October 2008 to December 2009</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> Belgacom, Brussels, Belgium.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>• Administered business rules in ILOG
            </li>
            <li>Fine-tuned the new generation reward program application by configuring the 
            application in Weblogic server administrator console
            </li>
            <li>Optimized the resource allocation between business users and system 
            users(Batch processes, Database jobs, and Message driven beans)
            </li>
            <li>Increased the application availability  to meet SLAS by optimized the 
            application code to better manage the memory.
            </li>
          </ul>
        </p>
        </h2>
    );

  }
}

export default ConsultancyResume;