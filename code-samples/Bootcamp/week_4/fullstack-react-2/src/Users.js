import React, { useState, useEffect } from 'react'


function Users() {
    //storage -> react hook
    //param 1 'storage' -> 'state'
    //param 2 'update your storage' -> 'update your state'
    const [users, setUsers] = useState([])

    //define a function that will make a fetch request to our database
    async function fetchUsers() {
        try {
            const response = await fetch(`http://localhost:3000/users`)
            const responseJSON = await response.json()
            setUsers(responseJSON)
        } catch (err) {
            console.error(err)
        }
    }

    //useEffect
    useEffect( () => {
        fetchUsers()
    }, [])

    return (
        <div>
            {users.map((user) => {
                return <h3>{user.name}</h3>
            })}
        </div>
    )
}


export default Users