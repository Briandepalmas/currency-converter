import React, { Component } from 'react'

export class Selector extends Component {

state={
    country:'',
    amount:''
}
   onSubmit = (event) => {
    event.preventDefault();
    console.log("SELECTOR IS INN",this.state.amount)
  }
  //////////////////////////
  onChange = (event) => (this.setState({amount: event.target.value })); 

    render() {
        return (
            <div>
                <form className="forms" onSubmit={this.onSubmit} >
                    <label id="abc">Currency: </label>
                    
                    <select id="countries" name="countries" onChange={this.onChange}>
                        <option value="testingvalue">-Select Country-</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Brazil">Brazil</option>
                   </select>
          
                    <input id="submit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Selector
