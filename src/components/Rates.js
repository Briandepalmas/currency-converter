import React from 'react'

export default function Rates(props) {


//for-in code block: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    const coinObject=props.rates;
    for (const coins in coinObject) {
        console.log(`from ratesss ${coins}: ${coinObject[coins]}`);
      }

    
    return (
        <div>
        
        </div>
    )
}
