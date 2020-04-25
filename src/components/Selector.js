import React, { Component } from 'react'
import '../Styles/App.css'
import Converter from './Converter'


export class Selector extends Component {
//assigned null to amount because did not want a 0 to render in the forms
state={
    country:'',
    amount:null,
    conversion:0
}

/* Input:receives number and  and country value.
Process: assigns it to this components state before calling 
        the convert function*/
   onSubmit = (event) => {
     event.preventDefault();
        this.setState({[event.target.name]: event.target.value })
        this.convert()  
    }

    /*Input: country value and amount value in the state currently. 
 
Process: After checking country value it divides the amount by that country's currency then
        assings the result to variable "a" which is then assigned to state conversion property
        narrowed down to 2 decimal points.

Output: returns the new value assigned to conversion property in the state.*/


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
        else if(this.state.country==="UK") {
            let a=this.state.amount/this.props.rates.GBP
            this.setState({conversion:a.toFixed(2)})
            return this.state.conversion
        }
        else if(this.state.country==="UAE") {
            let a=this.state.amount/this.props.rates.AED
            this.setState({conversion:a.toFixed(2)})
            return this.state.conversion
        }
        else if(this.state.country==="Japan") {
            let a=this.state.amount/this.props.rates.JPY
            this.setState({conversion:a.toFixed(2)})
            return this.state.conversion
        }
   
    }

    /*Input: Receives the information typed and selected from the forms.

Process: Targets the name value of "country" and "amount" in the state.
onSubmit function above finishes the process of assigment of form values into properties in the state */
 
onChange = (event) => (this.setState({[event.target.name]: event.target.value })); 
    
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
                                    <option value="UAE">United Arab Emirates</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="UK">United Kingdom</option>
                                </select> 
                            </div>
                            
                            <div className="enter-amount-bar">
                                <h1 id="enter-amount">Enter amount:</h1>
                                <input className="selector-enteramount"type="text" name="amount" placeholder="enter amount" value={this.state.amount}
                                onChange={this.onChange}/>
                                <input id="submit" type="submit" ></input>
                            </div>

                        </div>
                                   
                        <Converter choice={this.state.conversion} 
                           amount={this.state.amount} 
                           country={this.state.country}
                           />
                    </div>                 
                </form>
            </div>
        )
    }
}

export default Selector
