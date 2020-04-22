import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
 constructor(props){
   super(props);
   this.state={
       dollar:1,
       country:'',
       amount:''
   }
 }

 componentDidMount(){
 
  axios.get("https://api.exchangerate-api.com/v6/latest")
    .then(response => {this.setState({country:response.data.rates})
       console.log(this.state.country)
     })
     .catch(error => {
       console.log('there is an error', error)
     })
     
  }
 
 
  onSubmit = (event) => {
    event.preventDefault();
    console.log("IS INNNNNNN",this.state.amount)
  }
  //////////////////////////
  onChange = (event) => (this.setState({amount: event.target.value }));
  
    render() {
    return (
      <div>
         <form className="forms" onSubmit={this.onSubmit}>
          <h3 id="abc">Enter Amount: </h3>
         
          <input type="text" name="amount" placeholder="amount" value={this.state.amount}
          onChange={this.onChange}/>
          
          <input id="submit" type="submit"  ></input>
          </form>
      </div>
    )
  }
}

export default App

