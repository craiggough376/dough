import React, { useState } from 'react'

export default function PlayerInput(){

    const [name, setName] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        setName(event.target.name.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"></input>
                <input type="submit" value="submit"></input>
            </form>
        </>
    )
}