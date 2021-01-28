import React from "react";

async function GetCard(){
    const cardPromise = fetch('https://api.pokemontcg.io/v1/cards')
    const response = await cardPromise;
    const cardData = await response.json()
    console.log(cardData.cards[0]);
}


export default GetCard;