import React, { Component } from 'react';
import photo from './photo.jpg';
import './App.css';

import ResumeTypes from './components/ResumeTypes';
import FullStackResume from './components/FullStackResume';
import ProjectManagerResume from './components/ProjectManagerResume';
import DevOpsResume from './components/DevOpsResume';
import QualityAssuranceResume from './components/QualityAssuranceResume';

import './App.css';

class App extends Component {

  constructor(props) {
  	super(props);
    this.setResumeType = this.setResumeType.bind(this);
  }	 

  state = {
    resumetypes: [
      {
      	id: 1,
      	type: 'Full Stack Developement'
      },
      {
      	id: 2,
      	type: 'Project Management'
      },
      {
      	id: 3,
      	type: 'DevOps'
      },
      {
      	id: 4,
      	type: 'Quality Assurance'
      }
    ],
    selectedResumetype: 0,      
  }

  setResumeType(selectedtype) {

  	this.setState({selectedResumetype: selectedtype})
 
  }


  render() {

  	if (this.state.selectedResumetype === 1) {


  	return (

      <div className="App">
        <header className="App-header">
          <img src={photo} alt="" />
          <h2> {"Welcome to Raj Shenoy's Home Page"} </h2>
          <p>{"Powered by React.js"}</p>
        </header>

        <header className="App-menu">
          <ResumeTypes resumetypes={this.state.resumetypes} selectedtype={this.setResumeType} />
        </header>

        <h2>
        <FullStackResume />
        </h2>

      </div>
    );
  }

  if (this.state.selectedResumetype === 2) {


    return (

      <div className="App">
        <header className="App-header">
          <img src={photo} alt="" />
          <h4> {"Welcome to Raj Shenoy's Home Page"} </h4>
          <p>{"Powered by React.js"}</p>
        </header>
        

        <header className="App-menu">
          <ResumeTypes resumetypes={this.state.resumetypes} selectedtype={this.setResumeType} />
        </header>

        <h2 className="App-resume">
        <ProjectManagerResume />
        </h2>
      </div>
    );
  }

  if (this.state.selectedResumetype === 3) {


    return (

      <div className="App">
        <header className="App-header">
          <img src={photo} alt="" />
          <h2> {"Welcome to Raj Shenoy's Home Page"} </h2>
          <p>{"Powered by React.js"}</p>
        </header>

        <header className="App-menu">
          <ResumeTypes resumetypes={this.state.resumetypes} selectedtype={this.setResumeType} />
        </header>

        <h2 className="App-resume">
        <DevOpsResume />
        </h2>
      </div>
    );
  }


  if (this.state.selectedResumetype === 4) {


    return (

      <div className="App">
        <header className="App-header">
          <img src={photo} alt="" />
          <h2> {"Welcome to Raj Shenoy's Home Page"} </h2>
          <p>{"Powered by React.js"}</p>
        </header>

        <header className="App-menu">
          <ResumeTypes resumetypes={this.state.resumetypes} selectedtype={this.setResumeType} />
        </header>

        <h2 className="App-resume">
        <QualityAssuranceResume />
        </h2>

      </div>
    );
  }
	else {


  	return (

       <div className="App">
        <header className="App-header">
          <img src={photo} alt="" />
          <h2> {"Welcome to Raj Shenoy's Home Page"} </h2>
          <i>{"Powered by React.js"}</i>
        </header>

        <header className="App-menu">
          <ResumeTypes resumetypes={this.state.resumetypes} selectedtype={this.setResumeType} />
        </header>

      </div>  

    );

  	}

  }

}

export default App;
