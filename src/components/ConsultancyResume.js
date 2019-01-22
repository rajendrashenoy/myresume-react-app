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
        A highly motivated IT professional with 15+ years of consultancy experience in analyzing complex 
        enterprise business needs and delivering the outcomes. Achieves stakeholder expectations 
        and delivers business value constantly, consistently, and cost effectively. Possesses 
        wide array of transferrable set of skills that can be leveraged to realize the 
        desired outcomes within the entire Software Development Life Cycle. Demonstrates 
        excellent organizational, management, and technical skill to consistently meet deadlines. 
        Recognized for excellent communication, presentation, and negotiation skills.
        </p> 

        <p className="App-resume-header">Consultancy Experience</p> 

        <p className="App-resume-timeline">JUNE 2010 – PRESENT</p> 
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
            <li>Provides functional / technical leadership to own team and to other teams.
            </li>
            <li>Leads end to end delivery of highly complex / multiple domains.
            </li>
            <li>Researches and integrates third party solutions to IT landscapes 
            and mitigates the risks on proactive and reactive basis.
            </li>
            <li>Works closely with third party technology vendors to troubleshoot complex 
            technical issues.
            </li>
            <li>Provides Level 1 support to client’s Lawson, Vertex, and Crystal report 
            applications
            </li>

          </ul>
        </p>

        <p className="App-resume-timeline">OCOTBER 2008 – DECEMBER 2009</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> Belgacom, Brussels, Belgium.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Administered business rules in ILOG
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

        <p className="App-resume-timeline">OCTOBER 2007 – SEPTEMBER 2008</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> Accenture, Germany.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Provided expertise on legacy retail product catalog and mapped it to the new system product catalog.
            </li>
          </ul>
        </p>

        <p className="App-resume-timeline">MARCH 2004 – SEPTEMBER 2007</p> 
        <p className="App-resume-jobdescription">CRM Consultant, <i> o2, Germany.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Analyzed business requirements for o2 CRM Systems and Customer Database and translated them to product features
            for engineering team to implement.
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

export default ConsultancyResume;