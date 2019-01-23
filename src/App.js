import React, { Component } from 'react';
import photo from './photo.jpg';
import './App.css';

import ResumeTypes from './components/ResumeTypes';
import FullStackResume from './components/FullStackResume';
import ProjectManagerResume from './components/ProjectManagerResume';
import DevOpsResume from './components/DevOpsResume';
import ConsultancyResume from './components/ConsultancyResume';

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
      	type: 'Consultancy'
      },
      {
      	id: 3,
      	type: 'DevOps'
      },
      {
      	id: 4,
      	type: 'Project Management'
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
          <h7 className="App-copy">{"Powered by React.js"}</h7>
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
          <h2> {"Welcome to Raj Shenoy's Home Page"} </h2>
          <h7 className="App-copy">{"Powered by React.js"}</h7>
        </header>
        

        <header className="App-menu">
          <ResumeTypes resumetypes={this.state.resumetypes} selectedtype={this.setResumeType} />
        </header>

        <h2 className="App-resume">
        <ConsultancyResume />
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
          <h7 className="App-copy">{"Powered by React.js"}</h7>
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
          <h7 className="App-copy">{"Powered by React.js"}</h7>
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
	else {


  	return (

       <div className="App">
        <header className="App-header">
          <img src={photo} alt="" />
          <h2> {"Welcome to Raj Shenoy's Home Page"} </h2>
          <h7 className="App-copy">{"Powered by React.js"}</h7>
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
