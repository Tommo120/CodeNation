import React, { Component } from 'react';
import axios from 'axios'; //Basically the same as #include
import Users from './components/Users';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  //This function runs when everything has finished loading
  componentDidMount = async () => {
    console.log("Inside of component did mount");
    this.setState({
      loading: true
    })
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); //Get data from 'API' location

    // Async & Await forces JS to pause until axios.get has completed

    console.log(response.data);

    console.log('Before updating state');
    this.setState({
      users: response.data
    })
    console.log('After updating state');

    this.setState({
      loading: false
    })
  }

  render() {
    console.log("Inside of render");

    const allUsers = this.state.users.map( user => {
      return<h1 key={user.id}>{user.name}</h1>
    })
    return (
      <div>
        <Users loading={this.state.loading} data={allUsers}/>
      </div>
    )
  }
}


export default App;