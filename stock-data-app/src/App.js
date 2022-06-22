import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Main from './Main';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import Greetings from './Greetings';
import LoginForm from './LoginForm';

class App extends Component {

  constructor(props) { 
    super(props);

    this.state = {
      firstname: "Stephen",
      lastname:"Tang",
      Msft:300, 
      TwitterValue:400,
      AmazonValue:2000, 
      values: [{"company": "Microsoft", "value": 100},
               {"company": "Twitter", "value": 200},
               {"company": "Amazon", "value": 400}],
      email: 'email@stem',
      password: 'apsdassa'
    }
  }

  increaseValues(){ 
    this.setState((prevState) => ({
      name:"Stephen",
      Msft:prevState.Msft + 1,
      TwitterValue: prevState.TwitterValue +1,
      AmazonValue: prevState.AmazonValue + 1 
    }))
  }


  decreaseValues(){ 
    this.setState((prevState) => ({
      Msft: prevState.Msft - 1,
      TwitterValue: prevState.TwitterValue - 1,
      AmazonValue: prevState.AmazonValue - 1 
    }))

  }

  jumble(){
    this.setState((prevState)  =>({

      Msft: prevState.AmazonValue,
      TwitterValue: prevState.Msft,
      AmazonValue: prevState.TwitterValue
    }))
  }


  handleChange(event) { 
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
        [name]: value
      }
    )
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.firstname)
    console.log(this.state.lastname) 

  }


  handleFormUpdate(values){
    console.log(values.email)
    console.log(values.password)
  }
  render() {
    return (<div> <Welcome 
      firstname={this.state.firstname}
      lastname={this.state.lastname}

      />
      {/* <Greetings firstname= {this.state.firstname} lastname={this.state.lastname} /> */}
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
           FirstName<input type="text" name={this.state.firstname} onChange={this.handleChange.bind(this)}/>
        </label>
        <label>
          Lastname<input type="text" name={this.state.lastname} onChange={this.handleChange.bind(this)}/>
        </label>
        <button type="submit">Submit</button>

      </form>
      <Main
        values={this.state.values}
        Msft={this.state.Msft}
        TwitterValue={this.state.TwitterValue}
        AmazonValue={this.state.AmazonValue}
        increase={this.increaseValues.bind(this)}
        decrease={this.decreaseValues.bind(this)}
        jumble={this.jumble.bind(this)}>
        <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)}  />
      </Main></div>);
  }
   
  
}

export default App;
