import React from 'react'

function NewUser() {

    //use this function when you submit your form!
    function handleSubmit(event) {
        //google what this function does below: (hint: something about refreshing pages)
        event.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/users`,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    name: 'add something here'
                })   
            })
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <div>
            <h1>Look up documentation on how to add a html form</h1> 
        </div>
    )
}

module.exports = NewUser