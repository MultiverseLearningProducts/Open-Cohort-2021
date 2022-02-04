import './index.css';
import Card from './Card'

const multiplyCards = () => {
  let arrCards = []
  for(let i = 0; i < 5; i++) {
    arrCards.push(<Card key={i} />)
  }
  return arrCards
}

function App() {
  return (
    <div className="App">
      {multiplyCards()}
    </div>
  );
}

export default App;
