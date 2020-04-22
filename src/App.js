import React, { Component } from 'react'
import axios from 'axios'
import Selector from './components/Selector'

export class App extends Component {
 constructor(props){
   super(props);
   this.state={
       dollar:1,
       country:'',
       amount:'',
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

 
  countrySelection =country=>{
    this.setState({amount:country})
    console.log("this ",country)
    console.log("from app",this.state.amount)
  }
 
  
    render() {
    return (
      <div>

         <Selector pick={this.countrySelection}/>

         {/* <form className="forms" onSubmit={this.onSubmit}>
          <h3 id="abc">Enter Amount: </h3>
         
          <input type="text" name="amount" placeholder="amount" value={this.state.amount}
          onChange={this.onChange}/>
          
          <input id="submit" type="submit"  ></input>
          </form> */}
      </div>
    )
  }
}

export default App

