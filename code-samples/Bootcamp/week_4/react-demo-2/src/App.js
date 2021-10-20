import React, {useEffect, useState} from 'react'
import Loop from './Loop'

function loopForMe() {
  let arrOfLoops = []
  for(let i = 0; i < 11; i++) {
    arrOfLoops.push(<Loop />)
  }
  return arrOfLoops
}

function App() {
  const [music, setMusic] = useState([])

  async function fetchMusic(){
		try {
			const response = await fetch('http://localhost:3000/music');
			const responseJSON = await response.json();
			setMusic(responseJSON)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchMusic()
	}, []);

  console.log('MUSIIIIC', music)

  return (
    <div>
      <h1>HELLOO</h1>
    </div>
  );
}

export default App;
