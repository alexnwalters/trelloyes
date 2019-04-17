import React from 'react';
import Card from './Card';

function List(props) {
    console.log(props.cards)

    const card = props.cards.map((card, i) => 
        <Card
            key={i}
            title={card.title}
            content={card.content}
        >
        </Card>
        )

    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {card}
            </div>
        </section>
    )
}

export default List;