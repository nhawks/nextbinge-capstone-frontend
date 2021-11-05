import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
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
       
      </div>
    );
  }
}

export default App;