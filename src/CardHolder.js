import React from 'react'

function CardHolder(props) {
    return (
        <section>
            <h3>PokeMon Cards</h3>
            <div>{props.cards.map(p =>(
                <div key={p.id}>  {p.name}
                <div><img key="p.imageUrl" src={p.imageUrl} alt=""/></div>
                </div> 
            ))}</div>
           
            
        </section>
    )
}

export default CardHolder;