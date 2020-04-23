import React, { Component } from 'react'
import '../App.css'
import Converter from './Converter'


export class Selector extends Component {

state={
    country:'',
    amount:null,
    conversion:0
}

//////////////////////

   onSubmit = (event) => {
     event.preventDefault();
        this.setState({[event.target.name]: event.target.value })
        this.convert()
   
    }

  ////////////////////////////

    convert(){
        if (this.state.country==="Brazil"){
            let a=this.state.amount/this.props.rates.BRL
            this.setState({conversion:a.toFixed(2)})
            return this.state.conversion
        }
        else if(this.state.country==="Dominican-Republic") {
            let a=this.state.amount/this.props.rates.DOP
            this.setState({conversion:a.toFixed(2)})
            return this.state.conversion
        }
        else{
             console.log("did not update")
        }
   
    }

    

  //////////////////////////
 
  onChange = (event) => (this.setState({[event.target.name]: event.target.value })); 

  ///////////////////////
    
  render() {
        return (
            <div className="forms-main">
                <form className="forms" onSubmit={this.onSubmit} >
                    <div>
                        <div className="both-bars">
                            <div className="country-bar">
                               <label>
                                    <h1 className="selector-currency">Currency: </h1>
                               </label>
                    
                                <select className="countries" name="country" onChange={this.onChange}>
                                    <option value="dummyvalue" >-Select Country-</option>
                                    <option value="Dominican-Republic" >Dominican Republic</option>
                                    <option value="Brazil">Brazil</option>
                                </select> 
                            </div>
                            
                            <div className="enter-amount-bar">
                                <h1>Enter amount:</h1>
                                <input className="selector-enteramount"type="text" name="amount" placeholder="enter amount" value={this.state.amount}
                                onChange={this.onChange}/>
                                <input id="submit" type="submit" ></input>
                            </div>

                        </div>
                        
                        
                        
                        <Converter choice={this.state.conversion} 
                           amount={this.state.amount} 
                           country={this.state.country}/>
                    </div>                 
                </form>
            </div>
        )
    }
}

export default Selector
