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

        <p className="App-resume-section">
        Senior Full Stack Developer with vast of experience in driving complex IT solutions 
        through discover, design, deployment, and support phases leveraging a wide array of 
        technical skills acquired over 22+ years. Possesses rich people, processes, and 
        programming skills. Vastly experienced design/development/Integration/support of 
        Front End (UI), Backend (Services, SOAP/REST APIs, and Middleware), Microservices,
        and IT infrastructure. Proven Quality Assurance skills in the areas of unit/component/
        integration testing. Highly knowledgeable of all aspects of software development
        life cycle (SDLC) and support (ITIL). Looking for a position that requires working 
        effectively in developing digitally transformative IT Solutions that fully realize the 
        organization’s business vision and strategic goals.
        </p> 

        <p className="App-resume-header">Fukk Stack Developement Experience</p> 

        <p className="App-resume-timeline">JUNE 2010 – PRESENT</p> 
        <p className="App-resume-jobdescription">SENIOR APPLICATIONS CONSULTANT, <i> STEFANINI CANADA LTD.</i> </p> 


        <p className="App-resume-section">
          <ul>  
            <li>Develops end to end web applications for a various Stefanini clients 
            leveraging React/Jquery/dodjo/dijit Libraries, Angular/Vue frameworks, and 
            MEAN/Java/J2EE/.NET stacks.
          </li>

            <li>Develops mobility applications for a wide range of Stefanini clients leveraging 
            Angular, Jquery, Dojo, Dijit, React, and Vue frameworks/libraries.
            </li>

            <li>Provides technical consultancy and support to a Stefanini clientale 
            in the areas of UI/UX, Mobility, and Digital Transformation.
            </li>

            <li>Provides technical consultancy to a number of Stefanini clients 
            in the areas of UI/UX, Mobility, and Digital Transformation.
            </li>

            <li>Designed and delivered company’s first mobility applications to strategic clients.
            </li>

            <li>Designed and developed cloud based Stefanini Project Central Suite of Applications 
            that manages all application division projects.
            </li>

            <li>
            Designed and delivered companies’s BW projects to strategic clients.
            </li>

          </ul>
        </p> 

        <p className="App-resume-timeline">OCOTBER 2008 – DECEMBER 2009</p> 
        <p className="App-resume-jobdescription">LEAD TECHNICAL CONSULTANT, <i> BELGACOM BRUSSELS.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Designed and developed Belgacom’s first web loyalty program.
            </li>
          </ul>
        </p> 


        <p className="App-resume-timeline">OCTOBER 2007 – SEPTEMBER 2008</p> 
        <p className="App-resume-jobdescription">CRM CONSULTANT, <i> ACCENTURE GERMANY.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Mapped and migrated product catalog from legacy system.
            </li>
          </ul>
        </p> 

        <p className="App-resume-timeline">MARCH 2004 – SEPTEMBER 2007</p> 
        <p className="App-resume-jobdescription">CRM CONSULTANT,<i> O2 GERMANY.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Designed and developed O2 Germany’s CRM Web application, Customer DB 
            and Customer Contact & Complaint Management system.
            </li>
          </ul>
        </p> 

        <p className="App-resume-timeline">JULY 2002 – MARCH 2004</p> 
        <p className="App-resume-jobdescription">SENIOR PROGRAMMER,<i> BMW GROUP, GERMANY.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Designed and developed BMW’s CRM system for England, Italy, Japan, 
            and Spain.
            </li>
          </ul>
        </p>

        <p className="App-resume-timeline">JANUARY 2000 – JUNE 2002</p> 
        <p className="App-resume-jobdescription">CRM CONSULTANT, <i> O2 GERMANY.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Developed O2 Germany’s web based self-care program.
            </li>
            <li>Developed O2 Germany’s Retail Customer DataBase (CDB).
            </li>
          </ul>
        </p>

        <p className="App-resume-timeline">JUNE 1999 – DECEMBER 1999</p> 
        <p className="App-resume-jobdescription">CRM CONSULTANT, <i> SOFTPLUS INDIA LTD, BOMBAY INDIA.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Design and developed Asia Online’s invoice generator.
            </li>
          </ul>  
        </p>

        <p className="App-resume-timeline">JUNE 1996 – APRIL 1999</p> 
        <p className="App-resume-jobdescription">ANALYST PROGRAMMER, <i> RAMCO SYSTEM MADRAS INDIA.</i> </p> 
        <p className="App-resume-section">
          <ul>  
            <li>Designed and developed Ramco Marshal ERP’s web modules.
            </li>
            <li>Designed and developed Ramco Marshal ERP’s EDI tool.
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

export default FullStackResume;