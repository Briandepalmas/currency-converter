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
    // console.log("SELECTOR IS INN",this.state.country)
    // console.log("SELECTOR IS INN",this.state.amount)
    //this.props.pick(this.state.country,this.state.amount)
    //this.setState({ username: '',password:'' });
   // this.setState({country:this.state.amount})
    if (this.state.country==="Brazil"){
        let a=this.state.amount/this.props.rates.DOP
        this.setState({conversion:a})
        console.log("new amnt",this.state.conversion)
         return this.state.conversion;
    }else{
        console.log("did not update")
    }
    
   
  }
  //////////////////////////
 
  onChange = (event) => (this.setState({[event.target.name]: event.target.value })); 

    render() {
        return (
            <div>
                

                <form className="forms" onSubmit={this.onSubmit} >
                    <div>
                        <label id="abc">Currency: </label>
                    
                        <select id="countries" name="country" onChange={this.onChange}>
                            <option value="dummyvalue" >-Select Country-</option>
                            <option value="Dominican Republic" >Dominican Republic</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                        
                        Enter amount:
                        <input type="number" name="amount" placeholder="amount" value={this.state.amount}
                         onChange={this.onChange}/>
                    
                        <input id="submit" type="submit"></input>
                        <Converter choice={this.state.conversion} 
                           amount={this.state.amount} 
                           rates={this.props}/>
                    </div>
                  
                </form>
            </div>
        )
    }
}

export default Selector
