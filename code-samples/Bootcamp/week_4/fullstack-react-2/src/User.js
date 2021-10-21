import React, { useState, useEffect } from 'react'


function User(props) {
    //props
    let requestURL = props.match.params.id

    const [user, setUser] = useState({})

    //define a function that will make a fetch request to our database
    async function fetchUser() {
        try {
            const response = await fetch(`http://localhost:3000/users/${requestURL}`)
            const responseJSON = await response.json()
            setUser(responseJSON)
        } catch (err) {
            console.error(err)
        }
    }

    //useEffect
    useEffect( () => {
        fetchUser()
    }, [])

    console.log('OUR UUUUSEERRR', user)
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}


export default User