import React from 'react';
import Card from './Card';
import './List.css';

class ListClass extends React.Component {
    render() {
        console.log(this.props.cards)

        const card = this.props.cards.map((card, i) => 
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
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {card}
                </div>
            </section>
        )
    }
}

export default ListClass;