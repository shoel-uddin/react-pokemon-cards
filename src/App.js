import { useEffect, useState } from 'react';
import './App.css';
import CardButton from './CardButton';
import CardHolder from './CardHolder';



function App() {
  const [cards, setCard] = useState([])
  async function GetCard(){

    const cardPromise = fetch('https://api.pokemontcg.io/v1/cards')
    // ('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
    const response = await cardPromise;
    const cardData = await response.json()

    //console.log(cardData.cards);
    setCard(cardData.cards)
    //setCard([cards, cardData])
    //console.log(setCard);
}

  useEffect(() => {
    GetCard()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <CardHolder cards={cards}/>
       <CardButton GetCard={GetCard} />

        
      </header>
    </div>
  );
}

export default App;
