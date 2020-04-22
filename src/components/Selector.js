import React, { Component } from 'react'
import Converter from './Converter'


export class Selector extends Component {

state={
    country:'',
    amount:0,
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
            <div>
                <form className="forms" onSubmit={this.onSubmit} >
                    <div>
                        <div id="currency">
                            <label>
                                <h1 className="selector-currency">Currency: </h1>
                             </label>
                    
                            <select id="countries" name="country" onChange={this.onChange}>
                                <option value="dummyvalue" >-Select Country-</option>
                                <option value="Dominican-Republic" >Dominican Republic</option>
                                <option value="Brazil">Brazil</option>
                            </select>
                            
                            <h1>Enter amount:</h1>
                            <input className="selector-submit"type="number" name="amount" placeholder="amount" value={this.state.amount}
                            onChange={this.onChange}/>
                    
                            <input id="submit" type="submit"></input>
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
