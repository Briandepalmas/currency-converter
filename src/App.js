import React, { Component } from 'react'
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
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
      <Router>
        <div id="main">
        <nav>
            <h1>
              <Link to="/About">About </Link>
              <Link to="/home">Home </Link>
              <Link to="/profile">Profile </Link>
              <Link to="/favorites">Favorites</Link>
            </h1>
           </nav>
         <Selector rates={this.state.rates}/>
         <Rates rates={this.state.rates}/>
      </div>
     `` <Switch>
         <Route exact path="/About" component={About} />
         {/* <Route exact path="/home" component={Home} /> */}
         <Route exact path="/profile" component={Profile} />
         {/* <Route exact path="/favorites" component={Favorites} /> */}
        </Switch>
      </Router>
      
    )
  }
}

export default App

