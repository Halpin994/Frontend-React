import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.submitScript = this.submitScript.bind(this);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitScript}>
          <input placeholder="First Name" input type="text" name="fname" id="edit-fname" size="30" maxlength="30" class="form-text required"></input>
          <input placeholder="Second Name" type="text" id="edit-lname" name="lname" size="30" maxlength="30" class="form-text required"></input>
          <button id="submitBtn" type="submit">Submit</button>
        </form>
      </div>
    );
  }


  submitScript = (event) => {
    event.preventDefault();
    // console.log("fname":event.target[0].value);
    //var headers = {'Access-Control-Allow-Origin':'*'}
    var account =
    {
      firstName: document.getElementById('edit-fname').value,
      lastName: document.getElementById('edit-lname').value
    };

    console.log(account);
    axios.post('http://localhost:8081/account', {account})
    .then((response) => {
        console.log("twefrsf");
      console.log(response);
    });
  }

}



export default App;
