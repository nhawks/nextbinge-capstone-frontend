import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import jwtDecode from 'jwt-decode';
// import axios from 'axios';

import NavBar from './components/NavBar/NavBar';
import PageHome from './components/PageHome/PageHome';
import PageAccess from './components/PageAccess/PageAccess';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PageAccount from './components/PageAccount/PageAccount';
import PageSearch from './components/PageSearch/PageSearch';

import './App.css'


class App extends Component {
  state = { }

  componentDidMount() {
    const jwt = localStorage.getItem("token")
    try {
      const userToken = jwtDecode(jwt)
      this.setState({userToken})
    } catch(err) {
    console.log("🚀 ~ file: App.jsx ~ line 21 ~ App ~ componentDidMount ~ err", err)
    }
  }

  setUser = async (userObject) => {
    const user = userObject
    this.setState({user})
  }
  
  

  render() {
    const user = this.state.user 
    return ( 
      <div>
        <NavBar user={user} />
        <Switch>

          <Route path="/" exact component={PageHome} />

          {/* Access Page - AllowAny */}
          <Route path="/access" component={PageAccess} />

          {/* Not-Found Page - AllowAny */}
          <Route path="/not-found" component={PageNotFound} />
          
          {/* Home Page - Users Only */}
          <Route 
            path="/home"
            render={props => {
              if(!user) {
                return <Redirect to="/access" />
              } else {
                return <PageHome {...props} />
              }
            }}
          />

          {/* Account Page - Users Only */}
          <Route 
            path="/account"
            render={props => {
              if(!user) {
                return <Redirect to="/access" />
              } else {
                return <PageAccount {...props} />
              }
            }}
          />

          {/* Search Page - Users Only */}
          <Route 
            path="/search"
            render={props => {
              if(!user) {
                return <Redirect to="/access" />
              } else {
                return <PageSearch {...props} />
              }
            }}
          />
         
          <Redirect to='/not-found' />

        </Switch>
      </div>
    );
  }
}

export default App;