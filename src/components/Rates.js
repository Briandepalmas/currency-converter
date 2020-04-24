import React from 'react'

export default function Rates(props) {


//for-in code block: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 
         const coinObject=props.rates;
    
    return (
        <div>
        <h1>{coinObject.BRL + " Brazil"}</h1>
        <h1>{coinObject.DOP + " Dominican Republic"}</h1>
        <h1>{coinObject.GBP + " United Kingdom"}</h1>
        <h1>{coinObject.JPY + " Japan"}</h1>
        <h1>{coinObject.AED + " United Arab Emirates"}</h1>

        </div>
    )
}
