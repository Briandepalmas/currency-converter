import React from 'react'


function Converter(props) {
    
      

    return (
        <body className={props.country}>
            
                <h1 id="usd">{"$USD "+props.choice}</h1>
            
        </body>
        
    )
    
}

export default Converter
