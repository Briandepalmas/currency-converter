import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Selector from './components/Selector'
import Rates from './components/Rates'

export class App extends Component {
 constructor(props){
   super(props);
   this.state={
       rates:''
   }
 }

 componentDidMount(){
 
  axios.get("https://api.exchangerate-api.com/v6/latest")
    .then(response => {this.setState({rates:response.data.rates})
       console.log(this.state.rates)
     })
     .catch(error => {
       console.log('there is an error', error)
     })
    }
 
  
 
  
    render() {
    return (
      <div id="main">
        <nav>
          <ul>
            <li>About</li>
            <li>Rates</li>
            <li>Home</li>
          </ul>
        </nav>
         <Selector rates={this.state.rates}/>
         <Rates rates={this.state.rates}/>
      </div>
    )
  }
}

export default App

