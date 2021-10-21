//React, useEffect, useState
import React, {useEffect, useState} from 'react'

function Songs() {
    //React hook
    //Store data, update data, use the data within this functional component
    //   storage , setMusic   how your state will be initialized when your component renders
    const [music, setMusic] = useState([])

    //write a function that will make a fetch request to our server
    async function fetchMusic() {
        //try catch block <- error handling
        // try something, if it doesn't work, it will go straight to the catch block
        try {
            const response = await fetch('http://localhost:3000/music')
            const responseJSON = await response.json()
            //update music []
            // music = [{},{},{},{},{}]
            setMusic(responseJSON)
        } catch(err) {
           console.error(err)
        }
    }

    //invoke useEffect
    //useEffect is a function that will be invoked after your component renders to the browser
    useEffect( () => {
        fetchMusic() // music = [{imgURL: '/'},{},{},{},{}]
    }, [])


    return(
        <div>
           {music.map((song, id) => {
               return(
                   <div key={id}>
                   <img src={song.imgURL} alt="" />
                   <p>{song.name}</p>
                   </div>
                ) 
            })
           } 
        </div>
    )
}

export default Songs

