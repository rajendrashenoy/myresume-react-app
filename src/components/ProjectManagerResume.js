import React, { Component } from 'react';


class ProjectManagerResume extends Component {

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
        A highly motivated IT professional with 15+ years of experience in managing 
        complex enterprise IT projects and delivering business outcomes. 
        Achieves stakeholder expectations and delivers business value constantly, 
        consistently, and cost effectively. Possesses wide array of transferrable set of 
        skills that can be leveraged to realize the desired outcomes within the entire 
        Software Development Life Cycle. Demonstrates excellent organizational, 
        management, and technical skill to consistently meet deadlines. Recognized 
        for excellent communication, presentation, and negotiation skills.
        </p> 

        <p className="App-resume-header">Project Management Experience</p> 

        <p className="App-resume-timeline">JUNE 2010 – PRESENT</p> 
        <p className="App-resume-jobdescription">Senior Applications Consultant, <i> Stefanini Canada Ltd</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Manages client SAP projects with a total annual turnover of over US$ 3.5 Million, 
            and, Acts as single point of contact for all client communications.
            </li>
            <li>Manages over 10 client SAP IT landscapes by ensuring high business continuity, 
            innovating constantly, and lowering cost of ownership.
            </li>
            <li>Successfully managed multiple IT transitions from incumbent vendors to 
            Stefanini delivery team
            </li>     
            <li>• Founded Stefanini's SAP Business Objects and Business Warehouse practice by 
            setting up the IT environment and training a pool of software engineers.
            </li>     
          </ul>
        </p>

        <p className="App-resume-timeline">OCOTBER 2008 – DECEMBER 2009</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> Belgacom, Brussels, Belgium.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Managed the Belgacom's web loyalty program rollout.
            </li>
          </ul>
        </p>

        <p className="App-resume-timeline">OCTOBER 2007 – SEPTEMBER 2008</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> Accenture, Germany.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Managed the product catalog migration project.
            </li>
          </ul>
        </p>

        <p className="App-resume-timeline">MARCH 2004 – SEPTEMBER 2007</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> o2, Germany.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Reporting to Project Management Office, managed multiple service requests 
            by buidling virtual team consisting of experts from multiple functional areas.
            </li>
          </ul>
        </p>

        <p className="App-resume-header">Skills</p> 
        <p className="App-resume-section">
          <ul>  

            <li>HTML/CSS/JSON/XML
            </li>
            <li>ASP/BASIC/C/C#/C++/Java/Java Script(JS)/Perl/PHP/Python/SQL
            </li>
            <li>Angular/Ajax/Express/J2EE(JSF,Servlet,JSP,EJB)/ 
            Jquery/Hibernate/MVC/Node/React/Vue/Rails/Spring/WCF/WPF/.NET/
            </li>
            <li>Weblogic server/Appache Tomcat
            </li>
            <li>Oracle/SQL Server/Sybase/MySQL/MS Access/Mongo DB
            </li>
            <li>Android/iOS/Linux/Windows
            </li>
            <li>Fiori/IBM Mobile First/Visual Studio/Eclipse
            </li>
            <li>UI/UX
            </li>
            <li>Android/iOS/Linux/Windows
            </li>
            <li>Agile/DevOps
            </li>
            <li>TFS/Rational ClearCase/SQL Developer/SQL Server Management Studio
            /Microsoft Visio/Nunit/Adobe Dreamweaver and Photoshop/Microsoft Office
            </li>

          </ul>        
        </p>

        <p className="App-resume-header">Education</p> 
        <p className="App-resume-timeline">JUNE 1996</p> 
        <p className="App-resume-jobdescription">M.S PHYSICS, <i> INDIAN INSTITUTE OF TECHNOLOGY, MADRAS INDIA.</i> </p> 
        <p className="App-resume-timeline">JUNE 1991</p> 
        <p className="App-resume-jobdescription">B.Sc PHYSICS, <i> Mahatma Gandhi University, Kottayam, INDIA.</i> </p> 

        </h2>
    );

  }
}

export default ProjectManagerResume;