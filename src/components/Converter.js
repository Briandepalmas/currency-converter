import React from 'react'
import '../App.css'

function Converter(props) {
    
      
    //console.log("converter-->",props.choice,props.amount,props.rates)
    return (
        <body className={props.country}>
            
                <h1 id="usd">{"$USD "+props.choice}</h1>
            
        </body>
        
    )
    
}

export default Converter
