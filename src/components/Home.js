import React from 'react'

export default function Home() {

    
let time= Date()

    //Displays the current time
    return (
        <div id="time">
            <h1>{time}</h1>
        </div>
    )
}
