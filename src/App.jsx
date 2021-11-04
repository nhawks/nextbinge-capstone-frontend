import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  // state = { }

  componentDidMount() {
     const jwt = localStorage.getItem("token")
     try {
       const user = jwtDecode(jwt)
       this.setState({user})
     } catch(err) {
      console.log("🚀 ~ file: App.jsx ~ line 21 ~ App ~ componentDidMount ~ err", err)
     }
  }



  render() {
    const user = this.state.user 
    return ( null );
  }
}
 
export default App;