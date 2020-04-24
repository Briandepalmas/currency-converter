import React, { Component } from 'react'
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
import './Styles/App.css'
import Selector from './components/Selector'
import Rates from './components/Rates'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'

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
      
     })
     .catch(error => {
       //console.log(error)
     })
     
    }
  
    render() {
      
    return (
      <Router>
        <div id="main">
        <nav className="navbar">
          
          <h1 id="logo"> CURRENCY-CONVERTER $ € ¥ د.إ</h1>
            <h1 className="links">    
              <Link to="/About">About </Link>
              <Link to="/Home">Home </Link>
              <Link onClick={this.test}to="/Rates">Rates </Link>
            </h1>
        </nav>
           
         <Selector rates={this.state.rates}/>
         <Footer/>
      </div>
        <Switch>
         <Route exact path="/About" component={About} />
         <Route exact path="/Home" component={Home} />
         <Route exact path="/Rates" component={Rates} />
        </Switch>
        
      </Router>
       
    )
  }
}

export default App

