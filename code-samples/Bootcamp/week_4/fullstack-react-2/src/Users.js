import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


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

    function deleteUser(id) {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'DELETE'
            })
            await response.json() 
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
            {users.map((user,id) => {
                return (
                    <div>
                        <Link key={id+1} to={`/users/${id+1}`}>
                            <li>{user.name}</li>
                        </Link>
                    {/* add a Delete button here and trigger the delete user function~ */}
                    </div>
                ) 
            })}

            <Link to={`/newUser`}>
                <button>Add New User</button>
            </Link>
        </div>
    )
}


export default Users