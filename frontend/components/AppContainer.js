import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../assets/stylesheets/app.css';
import { hot } from 'react-hot-loader';

import Header from './Header';
import Land from './Land';
import Issue from './Issue/Issue';
import EducationJobs from './EducationJobs/EducationJobs';
import ProjectStatus from './ProjectStatus/ProjectStatus';
import ProjectPage from './ProjectStatus/ProjectPage';
import News from './News/News';
import Article from './Article/Article';
import Surveys from './Surveys/Surveys';
import About from './About/About';
import Resource from './Resource/Resource';
import MeetTheTeam from './About/MeetTheTeam';
import getSurveys from '../helpers/api';

class AppContainer extends Component {
  render() {
    getSurveys().then(req => {
      console.log(req.data);
    });
    return (
      <BrowserRouter>
        <div className="Head">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Switch>
                <Route exact path="/" component={Land} />
                <Route path="/issues" component={Issue} />
                <Route path="/opportunities" component={EducationJobs} />
                <Route path="/projectstatus" component={ProjectStatus} />
                <Route path="/surveys" component={Surveys} />
                <Route exact path="/news" component={News} />
                <Route path="/news/:id" component={Article} />
                <Route path="/Project/:id" component={ProjectPage} />
                <Route path="/about" component={About} />
                <Route path="/team" component={MeetTheTeam} />
                <Route path="/resources" component={Resource} />
                <Route component={Land} />
              </Switch>
              {/* <div className="col-sm-10 offset-md-1"></div> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(AppContainer);
