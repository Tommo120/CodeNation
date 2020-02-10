import React from 'react'
import banan from '../images/banana.jpg'

export default function Home(props) {
    return (
        <div>
            <h1>This is the home page!</h1>
            <h2>I am {props.name}</h2>
            <img src={banan} alt="This is a banan"/>
        </div>
    )
}
