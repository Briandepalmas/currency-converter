import React from 'react'


function Converter(props) {
    
/*Input: Receives the current country and the conversion value from the selector state as props.

Process: assigns the country value as the className for the body of the app 
         and Displays the conversion value in the body.

Output: Depending on country given as className value it will display a picture of that country in the body */

    return (
        <body className={props.country}>           
                <h1 id="usd">{"$USD "+props.choice}</h1>          
        </body>
        
    )
    
}

export default Converter
